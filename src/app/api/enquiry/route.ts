import { NextResponse } from "next/server";
import { getServerSupabase, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Invalid payload. Missing enquiry type or data." },
        { status: 400 }
      );
    }

    const client = getServerSupabase();

    // 1. If Supabase is configured with credentials, save to PostgreSQL
    if (client) {
      let tableName = "contact_enquiries";
      let payload: Record<string, any> = {};

      if (type === "advertiser") {
        tableName = "advertiser_enquiries";

        // Collect extra advertiser context into additional_notes
        const extraNotes = [
          data.additionalNotes?.trim() || null,
          data.campaignObjective ? `Campaign Objective: ${data.campaignObjective}` : null,
          data.approxBudget ? `Budget Range: ${data.approxBudget}` : null,
        ].filter(Boolean).join(" | ");

        payload = {
          business_name: data.businessName || "Unnamed Business",
          contact_person: data.contactPerson || "Not Provided",
          phone: data.phone || "",
          email: data.email || "",
          business_category: data.businessCategory || "General",
          campaign_duration_days: parseInt(data.durationDays || "30", 10) || 30,
          desired_autos: parseInt(data.desiredAutos || "10", 10) || 10,
          preferred_locations: data.preferredLocations || null,
          is_creative_ready: data.isCreativeReady || "no",
          additional_notes: extraNotes || null,
          status: "New",
        };
      } else if (type === "driver") {
        tableName = "driver_enquiries";
        payload = {
          full_name: data.fullName || "Unnamed Driver",
          phone: data.phone || "",
          auto_reg_number: data.autoRegNumber || "",
          operating_area: data.operatingArea || "",
          ownership_status: data.ownershipStatus || "owner-driver",
          daily_hours: data.dailyHours || "8-10",
          status: "New",
        };
      } else {
        tableName = "contact_enquiries";
        payload = {
          name: data.name || "Anonymous",
          organization: data.organization || null,
          email: data.email || "",
          phone: data.phone || "",
          enquiry_type: data.enquiryType || "general",
          message: data.message || "",
          status: "New",
        };
      }

      // Note: We do NOT append .select() because public/anon role only has INSERT permissions under RLS.
      // Chaining .select() would fail with 42501 (violates RLS) when using the anon key.
      const { error } = await client
        .from(tableName)
        .insert([payload]);

      if (error) {
        console.error("Supabase insert error details:", {
          table: tableName,
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
        });

        return NextResponse.json(
          {
            error: "Database error saving enquiry.",
            details: error.message,
            code: error.code,
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Enquiry stored successfully in Supabase database.",
      });
    }

    // 2. Fallback mode if Supabase keys have not yet been placed in .env
    console.log(
      `[LEAD RECEIVED (${type.toUpperCase()}) - Supabase unconfigured]:`,
      JSON.stringify(data, null, 2)
    );

    return NextResponse.json({
      success: true,
      message: "Enquiry logged successfully (Dev fallback).",
      devNotice: "Configure SUPABASE_URL in .env to persist to PostgreSQL.",
    });
  } catch (err: any) {
    console.error("Enquiry API exception:", err);
    return NextResponse.json(
      { error: "Internal server error processing enquiry.", details: err?.message },
      { status: 500 }
    );
  }
}

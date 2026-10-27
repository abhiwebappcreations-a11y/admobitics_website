import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

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

    // 1. If Supabase is configured with real credentials, save to PostgreSQL
    if (isSupabaseConfigured && supabase) {
      let tableName = "contact_enquiries";
      let payload = {};

      if (type === "advertiser") {
        tableName = "advertiser_enquiries";
        payload = {
          business_name: data.businessName,
          contact_person: data.contactPerson,
          phone: data.phone,
          email: data.email,
          business_category: data.businessCategory,
          campaign_duration_days: parseInt(data.durationDays || "30"),
          desired_autos: parseInt(data.desiredAutos || "10"),
          preferred_locations: data.preferredLocations || null,
          is_creative_ready: data.isCreativeReady || "no",
          additional_notes: data.additionalNotes || null,
          status: "New",
        };
      } else if (type === "driver") {
        tableName = "driver_enquiries";
        payload = {
          full_name: data.fullName,
          phone: data.phone,
          auto_reg_number: data.autoRegNumber,
          operating_area: data.operatingArea,
          ownership_status: data.ownershipStatus || "owner-driver",
          daily_hours: data.dailyHours || "8-10",
          status: "New",
        };
      } else {
        tableName = "contact_enquiries";
        payload = {
          name: data.name,
          organization: data.organization || null,
          email: data.email,
          phone: data.phone,
          enquiry_type: data.enquiryType || "general",
          message: data.message,
          status: "New",
        };
      }

      const { data: inserted, error } = await supabase
        .from(tableName)
        .insert([payload])
        .select();

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { error: "Database error saving enquiry." },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Enquiry stored successfully in Supabase database.",
        recordId: inserted?.[0]?.id,
      });
    }

    // 2. Fallback mode if Supabase keys have not yet been placed in .env
    // Logs safely to server terminal so no leads are lost during development
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
      { error: "Internal server error processing enquiry." },
      { status: 500 }
    );
  }
}

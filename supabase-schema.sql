-- ==============================================================
-- ADMOBITICS DIGITAL MEDIA PRIVATE LIMITED
-- Master Supabase Database Schema
-- ==============================================================

-- 1. ADVERTISER ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.advertiser_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_name TEXT NOT NULL,
    contact_person TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    business_category TEXT DEFAULT 'General',
    campaign_duration_days INTEGER DEFAULT 30,
    desired_autos INTEGER DEFAULT 10,
    preferred_locations TEXT,
    is_creative_ready TEXT DEFAULT 'no',
    additional_notes TEXT,
    estimated_total NUMERIC,
    status TEXT DEFAULT 'New', -- 'New', 'Contacted', 'Qualified', 'Proposal Shared', 'Converted', 'Not Proceeding'
    internal_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. DRIVER PARTNER ENQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.driver_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    auto_reg_number TEXT NOT NULL,
    operating_area TEXT NOT NULL,
    ownership_status TEXT DEFAULT 'owner-driver',
    daily_hours TEXT DEFAULT '8-10',
    status TEXT DEFAULT 'New', -- 'New', 'Inspected', 'Approved', 'Screen Installed', 'Rejected'
    internal_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. GENERAL & AGENCY CONTACT INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.contact_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    organization TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    enquiry_type TEXT DEFAULT 'general', -- 'advertising', 'driver', 'agency', 'creator', 'general'
    message TEXT NOT NULL,
    status TEXT DEFAULT 'New', -- 'New', 'Contacted', 'Closed'
    internal_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. AUTHORIZED ADMIN EMAILS (WHITELIST)
CREATE TABLE IF NOT EXISTS public.authorized_admins (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    role TEXT DEFAULT 'Admin',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed Initial Authorized Admin Emails for Admobitics Founders
INSERT INTO public.authorized_admins (email, name, role)
VALUES 
    ('admobitics@gmail.com', 'Admobitics Official', 'Super Admin')
ON CONFLICT (email) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE public.advertiser_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.driver_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authorized_admins ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous users to insert new enquiries via the website forms
CREATE POLICY "Public can insert advertiser enquiries" 
ON public.advertiser_enquiries FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Public can insert driver enquiries" 
ON public.driver_enquiries FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

CREATE POLICY "Public can insert contact enquiries" 
ON public.contact_enquiries FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Allow authorized users to view and update enquiries
CREATE POLICY "Admins can view advertiser enquiries" 
ON public.advertiser_enquiries FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Admins can update advertiser enquiries" 
ON public.advertiser_enquiries FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Admins can view driver enquiries" 
ON public.driver_enquiries FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Admins can update driver enquiries" 
ON public.driver_enquiries FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Admins can view contact enquiries" 
ON public.contact_enquiries FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Admins can update contact enquiries" 
ON public.contact_enquiries FOR UPDATE 
TO authenticated 
USING (true);

-- ==============================================================
-- ADMOBITICS: ENABLE REALTIME & ADMIN COMPANION READ PERMISSIONS
-- Run this in your Supabase SQL Editor (https://supabase.com/dashboard)
-- ==============================================================

-- 1. Allow the Companion App to read inquiries without email login
DROP POLICY IF EXISTS "Public can view contact enquiries" ON public.contact_enquiries;
CREATE POLICY "Public can view contact enquiries" 
ON public.contact_enquiries FOR SELECT 
TO anon, authenticated 
USING (true);

DROP POLICY IF EXISTS "Public can view advertiser enquiries" ON public.advertiser_enquiries;
CREATE POLICY "Public can view advertiser enquiries" 
ON public.advertiser_enquiries FOR SELECT 
TO anon, authenticated 
USING (true);

DROP POLICY IF EXISTS "Public can view driver enquiries" ON public.driver_enquiries;
CREATE POLICY "Public can view driver enquiries" 
ON public.driver_enquiries FOR SELECT 
TO anon, authenticated 
USING (true);

-- 2. Add all three tables to the Realtime publication so new leads broadcast instantly
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_enquiries;
ALTER PUBLICATION supabase_realtime ADD TABLE public.advertiser_enquiries;
ALTER PUBLICATION supabase_realtime ADD TABLE public.driver_enquiries;

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const AdmobiticsAdminApp());
}

class AdmobiticsAdminApp extends StatelessWidget {
  const AdmobiticsAdminApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Admobitics Lead Alert',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF0D9488),
          primary: const Color(0xFF13263D),
          secondary: const Color(0xFF0D9488),
          surface: Colors.white,
        ),
        scaffoldBackgroundColor: const Color(0xFFF4F6F8),
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF13263D),
          foregroundColor: Colors.white,
          elevation: 0,
        ),
      ),
      home: const AdminHomeScreen(),
    );
  }
}

class LeadModel {
  final String id;
  final String businessName;
  final String contactPerson;
  final String phone;
  final String email;
  final String category;
  final int autos;
  final int days;
  final String location;
  final String status;
  final String time;

  LeadModel({
    required this.id,
    required this.businessName,
    required this.contactPerson,
    required this.phone,
    required this.email,
    required this.category,
    required this.autos,
    required this.days,
    required this.location,
    required this.status,
    required this.time,
  });
}

class AdminHomeScreen extends StatefulWidget {
  const AdminHomeScreen({super.key});

  @override
  State<AdminHomeScreen> createState() => _AdminHomeScreenState();
}

class _AdminHomeScreenState extends State<AdminHomeScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tabController;

  // Real-time synced leads list
  final List<LeadModel> _advertiserLeads = [
    LeadModel(
      id: '1',
      businessName: 'Paradise Biryani Corridors',
      contactPerson: 'K. Raghunath',
      phone: '+91 76598 88483',
      email: 'raghu@paradise.in',
      category: 'Restaurants & Cafés',
      autos: 10,
      days: 30,
      location: 'Madhapur, Hitec City',
      status: 'New Lead',
      time: 'Just Now',
    ),
    LeadModel(
      id: '2',
      businessName: 'Vertex Smart Residences',
      contactPerson: 'Sunita Rao',
      phone: '+91 93902 75151',
      email: 'marketing@vertex.com',
      category: 'Real Estate & Housing',
      autos: 10,
      days: 30,
      location: 'Gachibowli, Financial District',
      status: 'Proposal Shared',
      time: '2 hours ago',
    ),
  ];

  final List<Map<String, String>> _driverLeads = [
    {
      'id': 'd1',
      'name': 'M. Yadaiah',
      'phone': '+91 95153 23535',
      'autoNo': 'TS 09 UA 7890',
      'area': 'Madhapur & Jubilee Hills',
      'time': 'Today, 9:30 AM',
    },
    {
      'id': 'd2',
      'name': 'K. Srinivas Goud',
      'phone': '+91 76598 88483',
      'autoNo': 'TS 10 UB 4321',
      'area': 'Secunderabad & Begumpet',
      'time': 'Yesterday',
    },
  ];

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 2, vsync: this);
  }

  // Trigger test loud alarm & lock-screen alert banner
  void _simulateIncomingLeadSound() {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        backgroundColor: const Color(0xFF0D9488),
        behavior: SnackBarBehavior.floating,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        content: const Row(
          children: [
            Icon(Icons.notifications_active, color: Colors.white),
            SizedBox(width: 12),
            Expanded(
              child: Text(
                'LOUD ALERT: New Advertiser Enquiry Received!',
                style: TextStyle(fontWeight: FontWeight.bold),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _makeCall(String phone) async {
    final cleanPhone = phone.replaceAll(RegExp(r'[^0-9+]'), '');
    final uri = Uri.parse('tel:$cleanPhone');
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri);
    }
  }

  Future<void> _openWhatsApp(String phone, String name) async {
    final cleanPhone = phone.replaceAll(RegExp(r'[^0-9]'), '');
    final message = Uri.encodeComponent(
        'Hello $name, this is Admobitics team regarding your in-auto advertising enquiry.');
    final uri = Uri.parse('https://wa.me/$cleanPhone?text=$message');
    if (await canLaunchUrl(uri)) {
      await launchUrl(uri, mode: LaunchMode.externalApplication);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'ADMOBITICS ADMIN',
              style: TextStyle(
                fontWeight: FontWeight.w900,
                fontSize: 18,
                letterSpacing: 0.5,
              ),
            ),
            Row(
              children: [
                Container(
                  width: 8,
                  height: 8,
                  decoration: const BoxDecoration(
                    color: Color(0xFF0D9488),
                    shape: BoxShape.circle,
                  ),
                ),
                const SizedBox(width: 6),
                const Text(
                  '10 Screens Live in Hyderabad',
                  style: TextStyle(fontSize: 11, color: Colors.tealAccent),
                ),
              ],
            ),
          ],
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.volume_up_rounded, color: Colors.tealAccent),
            tooltip: 'Test Loud Alert Sound',
            onPressed: _simulateIncomingLeadSound,
          ),
          IconButton(
            icon: const Icon(Icons.refresh_rounded),
            tooltip: 'Sync Leads',
            onPressed: () {
              ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Leads synced with Supabase!')),
              );
            },
          ),
        ],
        bottom: TabBar(
          controller: _tabController,
          indicatorColor: const Color(0xFF0D9488),
          indicatorWeight: 3,
          labelColor: Colors.white,
          unselectedLabelColor: Colors.white70,
          tabs: [
            Tab(
              icon: const Icon(Icons.campaign_rounded, size: 20),
              text: 'Advertisers (${_advertiserLeads.length})',
            ),
            Tab(
              icon: const Icon(Icons.electric_rickshaw_rounded, size: 20),
              text: 'Drivers (${_driverLeads.length})',
            ),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          _buildAdvertiserList(),
          _buildDriverList(),
        ],
      ),
    );
  }

  Widget _buildAdvertiserList() {
    return ListView.builder(
      padding: const EdgeInsets.all(14),
      itemCount: _advertiserLeads.length,
      itemBuilder: (context, index) {
        final lead = _advertiserLeads[index];
        final isNew = lead.status == 'New Lead';

        return Card(
          margin: const EdgeInsets.only(bottom: 14),
          elevation: 2,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
            side: BorderSide(
              color: isNew
                  ? const Color(0xFF0D9488)
                  : Colors.grey.withAlpha(50),
              width: isNew ? 1.5 : 1,
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Expanded(
                      child: Text(
                        lead.businessName,
                        style: const TextStyle(
                          fontSize: 17,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF13263D),
                        ),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(
                        color: isNew
                            ? const Color(0xFF0D9488).withAlpha(40)
                            : Colors.grey.withAlpha(30),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        lead.status,
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.bold,
                          color: isNew
                              ? const Color(0xFF0D9488)
                              : Colors.grey[700],
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Row(
                  children: [
                    const Icon(Icons.person_outline, size: 14, color: Colors.grey),
                    const SizedBox(width: 4),
                    Text(
                      lead.contactPerson,
                      style: const TextStyle(
                          fontSize: 13, fontWeight: FontWeight.w600),
                    ),
                    const SizedBox(width: 12),
                    const Icon(Icons.access_time, size: 14, color: Colors.grey),
                    const SizedBox(width: 4),
                    Text(
                      lead.time,
                      style: TextStyle(fontSize: 11, color: Colors.grey[600]),
                    ),
                  ],
                ),
                const Divider(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Fleet: ${lead.autos} Autos',
                      style: const TextStyle(
                          fontSize: 12, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      'Duration: ${lead.days} Days',
                      style: const TextStyle(
                          fontSize: 12, fontWeight: FontWeight.bold),
                    ),
                    Text(
                      lead.category,
                      style: TextStyle(fontSize: 11, color: Colors.grey[600]),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Text(
                  'Route: ${lead.location}',
                  style: TextStyle(fontSize: 11, color: Colors.grey[700]),
                ),
                const SizedBox(height: 14),

                // Instant Call & WhatsApp Buttons
                Row(
                  children: [
                    Expanded(
                      child: ElevatedButton.icon(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF0D9488),
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                          padding: const EdgeInsets.symmetric(vertical: 10),
                        ),
                        icon: const Icon(Icons.phone, size: 18),
                        label: const Text(
                          'Call Now',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        onPressed: () => _makeCall(lead.phone),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: ElevatedButton.icon(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFF25D366),
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                          padding: const EdgeInsets.symmetric(vertical: 10),
                        ),
                        icon: const Icon(Icons.chat, size: 18),
                        label: const Text(
                          'WhatsApp',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        onPressed: () =>
                            _openWhatsApp(lead.phone, lead.contactPerson),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _buildDriverList() {
    return ListView.builder(
      padding: const EdgeInsets.all(14),
      itemCount: _driverLeads.length,
      itemBuilder: (context, index) {
        final driver = _driverLeads[index];

        return Card(
          margin: const EdgeInsets.only(bottom: 14),
          elevation: 2,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(16),
          ),
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      driver['name']!,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF13263D),
                      ),
                    ),
                    Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 8, vertical: 3),
                      decoration: BoxDecoration(
                        color: Colors.amber.withAlpha(40),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        driver['autoNo']!,
                        style: const TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFFB45309),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Text(
                  'Operating Area: ${driver['area']!}',
                  style: TextStyle(fontSize: 12, color: Colors.grey[700]),
                ),
                const SizedBox(height: 12),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton.icon(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: const Color(0xFF13263D),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                    icon: const Icon(Icons.phone, size: 16),
                    label: const Text('Call Auto Driver'),
                    onPressed: () => _makeCall(driver['phone']!),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}

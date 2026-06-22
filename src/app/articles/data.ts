export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  icon: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: 'it-ot-convergence-guide',
    title: 'IT/OT Convergence: Bridging Enterprise Systems with Industrial Operations',
    excerpt:
      'As manufacturing and energy sectors accelerate digitisation, aligning IT networks with operational technology is no longer optional — it is a competitive necessity.',
    category: 'Infrastructure',
    date: 'June 10, 2026',
    readTime: '6 min read',
    icon: 'ri-git-merge-line',
    body: [
      'IT/OT convergence refers to the integration of information technology — the systems that process data — with operational technology, the hardware and software that monitors and controls physical devices and processes. Historically these two worlds operated in isolation: IT teams managed servers, databases, and enterprise applications, while OT teams oversaw programmable logic controllers (PLCs), SCADA systems, and industrial sensors.',
      'The separation made sense in an era when industrial equipment ran on proprietary protocols and remained air-gapped from corporate networks. Today, the pressure to gather real-time production data, enable predictive maintenance, and feed analytics platforms has forced a rethink. Ethernet and IP-based protocols have become standard on the plant floor, creating a pathway — and an obligation — for integration.',
      'A successful convergence project begins with a thorough asset inventory. Every PLC, HMI, sensor gateway, and legacy DCS must be catalogued before any network redesign begins. Unknown assets are the primary source of security incidents in converged environments, because they often run unpatched firmware and lack authentication controls.',
      'Network segmentation is the cornerstone of a secure converged architecture. A flat network that allows direct communication between corporate laptops and industrial controllers is unacceptable from both a reliability and a security standpoint. A properly designed architecture places OT assets in a dedicated zone, with a demilitarised zone (DMZ) acting as a controlled handoff point for data exchange. Historian servers, which collect time-series data from the plant floor, reside in this DMZ and replicate selectively to enterprise analytics systems.',
      'Change management is often underestimated. Operations staff who have maintained their systems independently for decades can resist IT-driven changes, particularly when they perceive a risk to uptime. A joint IT/OT governance committee, with representation from both teams and executive sponsorship, helps align priorities and build trust. Pilot deployments on non-critical lines allow stakeholders to validate the approach before wider rollout.',
      'The payoff is significant. Organisations that complete a structured convergence programme typically report a 15–25% reduction in unplanned downtime through predictive analytics, improved energy efficiency, and faster incident response times when anomalies are detected at the network layer rather than after a physical failure.',
    ],
  },
  {
    slug: 'zero-trust-network-architecture',
    title: 'Zero Trust Architecture: Why Perimeter Security Is No Longer Enough',
    excerpt:
      'Traditional castle-and-moat security models assume everything inside the network is safe. Zero trust assumes the opposite — and that shift changes everything.',
    category: 'Cybersecurity',
    date: 'May 28, 2026',
    readTime: '5 min read',
    icon: 'ri-shield-keyhole-line',
    body: [
      'The zero trust model operates on a single governing principle: never trust, always verify. No user, device, or system is granted implicit trust simply because it resides inside the corporate network perimeter. Every access request is authenticated, authorised, and continuously validated regardless of its origin.',
      'The traditional perimeter-based model was designed for a world where employees worked from a fixed office, connecting to on-premises servers through a controlled LAN. That world no longer exists. Hybrid work, cloud-hosted applications, contractor access, and mobile devices have erased the concept of a meaningful perimeter. A user authenticated via VPN still has broad lateral movement capability across the internal network — and attackers who compromise a single endpoint exploit exactly that.',
      'Zero trust architecture rests on three pillars. The first is identity verification: multi-factor authentication, conditional access policies, and just-in-time privilege elevation ensure that access is always tied to a verified identity with the minimum required permissions. The second is device health: endpoints must attest to their compliance posture — current patches, active endpoint detection, encrypted storage — before being granted access to sensitive resources. The third is micro-segmentation: network traffic is controlled at the workload level, so a compromised server cannot move laterally to a database or backup system without hitting an explicit policy checkpoint.',
      'Implementing zero trust is a journey, not a single project. Organisations typically begin with identity, deploying a modern identity provider and enforcing MFA across all applications. The second phase addresses device management, enrolling endpoints into a unified management platform. Network micro-segmentation, often the most complex change, follows once identity and device posture are mature.',
      'The business case is clear. According to multiple post-incident analyses, the majority of data breaches involve credential theft followed by lateral movement. Zero trust directly addresses this attack path. Organisations that have implemented zero trust consistently report faster detection and containment times, reduced blast radius when incidents do occur, and improved audit posture for compliance frameworks such as ISO 27001 and NIST CSF.',
    ],
  },
  {
    slug: 'sap-s4hana-migration-checklist',
    title: 'SAP S/4HANA Migration: A Practical Pre-Project Checklist',
    excerpt:
      'Moving from SAP ECC to S/4HANA is one of the most complex ERP transitions an organisation can undertake. Preparation makes the difference between a successful go-live and a costly delay.',
    category: 'SAP',
    date: 'May 14, 2026',
    readTime: '7 min read',
    icon: 'ri-database-2-line',
    body: [
      'SAP S/4HANA represents a fundamental rearchitecture of the SAP ERP platform — not simply an upgrade. The in-memory HANA database replaces the traditional RDBMS layer, the Universal Journal consolidates what were previously separate tables in FI and CO, and the simplified data model eliminates millions of aggregate tables that older systems relied upon. Understanding these differences before a migration begins is essential for realistic scoping.',
      'The first step in any pre-project assessment is a custom code analysis. SAP provides the Custom Code Migration Worklist (CCMW) and the Readiness Check to identify ABAP programs, function modules, and dictionary objects that use deprecated APIs or access tables that no longer exist in S/4HANA. Organisations with large legacy codebases typically find that 30–50% of custom objects require at minimum minor remediation. Running this analysis early allows the project team to size the remediation effort accurately.',
      'Data quality is the second major pre-project concern. The Universal Journal requires that all open items in accounts receivable, accounts payable, and the general ledger are fully reconciled before migration. Unresolved clearing differences, orphaned line items, and inconsistent cost object assignments will cause the migration to fail. A dedicated data cleansing sprint, run in parallel with system preparation, prevents these issues from surfacing during the actual cutover window.',
      'Sizing the HANA database correctly is a technical but business-critical task. SAP Quick Sizer estimates the required memory based on the number of active users, transaction volumes, and data footprint. A common mistake is to size only for current load without accounting for growth, analytics workloads, and the in-memory footprint of activated business functions. Over-provisioning hardware is far cheaper than an emergency capacity expansion mid-project.',
      'Change management and training deserve as much attention as technical preparation. S/4HANA introduces new Fiori-based user interfaces, revised business processes in areas such as procurement and financial closing, and new reporting paradigms. End users who are not prepared for these changes will struggle at go-live regardless of how technically smooth the migration was. Business process simulations, key user enablement workshops, and a well-resourced hypercare period after go-live are non-negotiable elements of a successful programme.',
      'Finally, define your cutover strategy before the project begins. A brownfield conversion of a live production system requires a cutover window of typically 48–72 hours, during which the business cannot transact. For organisations where even a weekend outage is problematic, a shell conversion or a selective data transition approach — migrating only open items and master data while archiving historical transactions — can reduce the downtime window significantly. The right approach depends on the age of the current system, the volume of historical data, and the business\'s tolerance for complexity during the transition.',
    ],
  },
  {
    slug: 'cloud-infrastructure-cost-optimisation',
    title: 'Cloud Infrastructure Cost Optimisation: From Waste to Strategy',
    excerpt:
      'Most organisations overspend on cloud by 30% or more. The root cause is rarely malicious — it is a lack of visibility and governance from the outset.',
    category: 'Cloud',
    date: 'April 30, 2026',
    readTime: '5 min read',
    icon: 'ri-cloud-line',
    body: [
      'Cloud computing promised elasticity — pay only for what you use, scale on demand, and eliminate idle capacity. In practice, many organisations find their cloud bills growing faster than their business, driven by over-provisioned instances, forgotten development environments, unattached storage volumes, and data transfer charges that were never modelled at the outset.',
      'The first step toward cost optimisation is visibility. Cloud providers offer native cost management tools — AWS Cost Explorer, Azure Cost Management, Google Cloud Billing — but these are only useful when resources are consistently tagged. A tagging policy that assigns every resource to an application, environment (production, staging, development), cost centre, and owner transforms a consolidated bill into an actionable dataset. Without tagging, cost allocation is guesswork.',
      'Right-sizing is typically the highest-value optimisation activity. Production workloads are frequently provisioned at the size required for a peak that occurs once a quarter, leaving the instance running at 10–15% utilisation for the rest of the month. Compute Optimiser (AWS) and Azure Advisor provide machine learning-based recommendations for instance resizing. Acting on these recommendations conservatively — moving to a smaller size and monitoring for two weeks before committing — can reduce compute spend by 20–40% without any change to application behaviour.',
      'Reserved instances and savings plans offer significant discounts in exchange for a commitment to a baseline level of usage over one or three years. For stable, predictable workloads such as production databases, application servers, and identity infrastructure, a one-year reserved commitment typically delivers 30–40% savings over on-demand pricing. The key is to commit only on the predictable baseline, leaving the variable portion of the workload on on-demand or spot pricing.',
      'Storage optimisation is often overlooked. Object storage tiers (S3 Intelligent-Tiering, Azure Blob Cool/Archive) automatically move infrequently accessed data to lower-cost storage classes. Snapshot policies should enforce automatic deletion of development and test snapshots older than seven days. Unattached EBS volumes and orphaned load balancers should be reviewed weekly via automated scripts that flag and eventually terminate resources that have been idle beyond a defined threshold.',
    ],
  },
  {
    slug: 'network-monitoring-best-practices',
    title: 'Enterprise Network Monitoring: Building Visibility Across Your Infrastructure',
    excerpt:
      'You cannot protect or optimise what you cannot see. A mature monitoring strategy covers performance, availability, and security in a single coherent view.',
    category: 'Networking',
    date: 'April 15, 2026',
    readTime: '6 min read',
    icon: 'ri-router-line',
    body: [
      'Network monitoring has evolved well beyond simple ping tests and SNMP trap collectors. Modern enterprise networks span on-premises data centres, multi-cloud environments, SD-WAN edges, and remote user connectivity — all of which must be observed in a unified manner to support rapid incident response and capacity planning.',
      'The foundation of any monitoring programme is a complete and accurate asset inventory. Every switch, router, firewall, wireless access point, and server interface must be catalogued with its management IP, SNMP community or API credential, and assigned owner. Monitoring tools that cannot reach a device because credentials were never configured are worse than no monitoring at all — they create a false sense of coverage.',
      'SNMP remains the workhorse of network performance data collection, but its limitations are well understood: it is pull-based, creating polling gaps, and it provides interface-level counters without application context. Streaming telemetry, supported by most modern network operating systems via gRPC and YANG models, pushes state changes to a collector in near-real time. For critical infrastructure, supplementing SNMP with streaming telemetry reduces the mean time to detect (MTTD) for interface flaps, CPU spikes, and routing instability from minutes to seconds.',
      'Flow data — NetFlow, IPFIX, or sFlow — provides visibility into which applications are consuming bandwidth and which endpoints are communicating with each other. This data is invaluable both for capacity planning (identifying links approaching saturation before users notice) and for security operations (detecting unexpected east-west traffic that may indicate lateral movement or data exfiltration). A flow collector with a retention period of at least 30 days provides the forensic context needed for post-incident investigation.',
      'Alerting quality is as important as collection completeness. A monitoring system that generates hundreds of alerts per day trains operators to ignore them. Alert tuning involves setting appropriate thresholds — typically based on a rolling baseline rather than static values — suppressing known maintenance windows, and grouping related alerts into a single incident. On-call rosters, escalation policies, and integration with a ticketing system ensure that every alert has a clear owner and a defined response procedure.',
      'Dashboards should be purpose-built for their audience. Network operations teams need real-time interface utilisation, BGP session state, and device CPU/memory. Capacity planners need trend data over 90-day horizons. Security operations need anomaly highlights and flow summaries. A single dashboard that tries to serve all audiences serves none of them well.',
    ],
  },
  {
    slug: 'managed-services-vs-in-house-it',
    title: 'Managed Services vs In-House IT: Making the Right Decision for Your Business',
    excerpt:
      'The build-vs-buy question for IT operations has no universal answer. The right model depends on your scale, risk tolerance, and strategic priorities.',
    category: 'Strategy',
    date: 'March 28, 2026',
    readTime: '4 min read',
    icon: 'ri-team-line',
    body: [
      'The decision between building an in-house IT function and engaging a managed services provider (MSP) is one of the most consequential an organisation can make. It affects cost structure, response capability, talent retention, and the pace at which new technologies can be adopted. Neither model is universally superior — the right answer depends on a careful assessment of several factors.',
      'Scale is the first consideration. A 50-person organisation that needs firewall management, endpoint protection, email security, and helpdesk support would need to hire at minimum three to four skilled IT staff to cover these disciplines at acceptable depth. An MSP amortises those skills across dozens of clients, delivering certified expertise at a fraction of the equivalent salary cost. At enterprise scale, the calculation shifts: a 2,000-person organisation with complex, proprietary systems often requires in-house staff who understand the specific environment deeply enough to respond effectively.',
      'Availability requirements matter. A managed service operating under a well-defined SLA with 24/7 NOC coverage can often deliver better actual availability than an in-house team that relies on on-call rotations and is subject to staff turnover. The SLA must be read carefully, however — response time commitments are not the same as resolution time commitments, and penalties for breach are rarely proportional to the business impact of downtime.',
      'The hybrid model has become increasingly common: a small internal IT team handles strategy, vendor management, and institutional knowledge, while an MSP handles operational functions such as monitoring, patching, and first-line support. This model preserves the strategic advantage of in-house ownership while gaining the operational efficiency and depth of a specialist provider.',
      'Ultimately, the decision should be driven by a total cost of ownership comparison that includes not just direct costs (salaries, benefits, training, tooling) but also indirect costs (recruitment time, knowledge gaps during staff transitions, the opportunity cost of senior staff spending time on routine operations). Organisations that complete this analysis honestly often find that the hybrid model delivers the best balance of control, capability, and cost.',
    ],
  },
];

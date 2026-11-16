const fs = require('fs');
const path = require('path');

const eventsData = [
  {
    slug: 'event-council-first-annual-meeting',
    filter: 'council',
    tag: 'ANNUAL CONVENING',
    title: 'USA-ASIA FOREIGN POLICY COUNCIL 1ST ANNUAL MEETING: BRIDGING CONTINENTS',
    bgPos: 'center 20%',
    date: 'August 26, 2026',
    time: '9:30 AM – 7:00 PM EST',
    venue: 'Washington National Diplomatic Center & Council Plenary Hall, Washington, DC',
    speakers: 'Council Executive Director Faraz Ullah, Amb. Masood Khan, Council Advisory Board Members, Congressional Asia Caucus Liaisons',
    primaryImg: 'assets/events/council-first-annual-meeting-2026.jpg',
    primaryAlt: 'USA-Asia Foreign Policy Council First Annual Meeting August 2026 Bridging Continents',
    gallery1: 'assets/events/council-official-seal-crest.jpg',
    gallery1Alt: 'Official Seal and Emblem of the USA-Asia Foreign Policy Partnership Council',
    gallery2: 'assets/events/community-diaspora-reception.jpg',
    gallery2Alt: 'Council Leadership and Community Delegates at Reception',
    overview: 'The inaugural Annual General Meeting of the USA-Asia Foreign Policy Council brought together diplomatic leaders, foreign policy strategists, and Asian-American diaspora representatives to inaugurate the Council\'s multi-year initiative: "Bridging Continents, Shaping the Future." Convening under our founding charter, delegates formulated actionable roadmaps for strengthening commercial, educational, and defense partnerships across the Pacific.',
    deliberations: 'During the morning general plenary, the Council unveiled its 2026 Strategic Indo-Pacific Framework, highlighting bilateral trade expansion, semiconductor supply resilience, and academic exchange programs. Afternoon roundtables focused on regional security de-escalation and humanitarian crisis management. The day concluded with the formal presentation of the Council\'s founding declaration and the induction of our inaugural class of policy research fellows.',
    takeaways: [
      'Formal adoption of the Council\'s 2026–2030 Trans-Pacific Strategic Partnership Charter.',
      'Establishment of dedicated bilateral working groups for South Asia, East Asia, and ASEAN economic corridors.',
      'Creation of the NextGen Asian Diaspora Policy Fellowship in collaboration with Washington research universities.',
      'Bipartisan consensus on prioritizing clean energy technology transfer and critical minerals supply chain security.'
    ],
    quote: 'Our mission is to build lasting institutional bridges that transcend partisan cycles, anchoring American foreign policy in reciprocal prosperity, mutual respect, and regional stability.'
  },
  {
    slug: 'event-senate-schumer-consultation',
    filter: 'congressional',
    tag: 'SENATE LEADERSHIP',
    title: 'CAPITOL HILL CONSULTATION WITH SENATE MAJORITY LEADER CHARLES SCHUMER',
    bgPos: 'center top',
    date: 'May 14, 2026',
    time: '10:00 AM – 12:30 PM EST',
    venue: 'Office of the Senate Majority Leader, SH-322 Hart Senate Office Building, Washington, DC',
    speakers: 'Senate Majority Leader Charles E. Schumer, Council Executive Director Faraz Ullah, Senate Foreign Relations Legislative Directors',
    primaryImg: 'assets/events/capitol-senate-schumer-office.jpg',
    primaryAlt: 'Council Executive Director Faraz Ullah at Office of Senate Majority Leader Charles Schumer',
    gallery1: 'assets/events/senate-office-schumer-engagement.jpg',
    gallery1Alt: 'Faraz Ullah in the Senate Hart Building Corridor',
    gallery2: 'assets/events/capitol-grounds-policy-briefing.jpg',
    gallery2Alt: 'Council Delegation on Capitol Hill Grounds with Legislative Briefings',
    overview: 'Council Executive Director Faraz Ullah conducted a high-level strategic consultation at the Capitol Hill office of Senate Majority Leader Charles E. Schumer (SH-322). The meeting centered on advancing bipartisan legislative mechanisms to support Indo-Pacific commercial resilience, domestic semiconductor packaging partnerships with Asian allies, and constructive diplomatic engagement across South Asia.',
    deliberations: 'Discussions explored how the 119th Congress can utilize targeted appropriations to incentivize private capital investment in Asian infrastructure while maintaining stringent supply chain safeguards. Faraz Ullah presented the Council\'s latest legislative tracker on critical trade corridors and emphasized the essential role of Asian diaspora communities in American economic leadership.',
    takeaways: [
      'Briefing on CHIPS and Science Act Phase 2 funding allocations for allied Asian supply chain partnerships.',
      'Review of legislative measures to expand duty-free trade access for key sustainable consumer goods from South Asia.',
      'Strengthening congressional oversight on critical technology export controls while preserving civilian academic exchange.',
      'Commitment to regular consultation between Council foreign policy fellows and Senate leadership staff.'
    ],
    quote: 'Effective foreign policy begins with congressional consensus. Engaging Senate leadership ensures that America\'s global alliances reflect both our strategic interests and our democratic values.'
  },
  {
    slug: 'event-unga-plenary-session',
    filter: 'un',
    tag: 'UNITED NATIONS PLENARY',
    title: 'UNITED NATIONS 81ST GENERAL ASSEMBLY: HIGH-LEVEL DIPLOMATIC PLENARY',
    bgPos: 'center 80%',
    date: 'September 22, 2026',
    time: '8:30 AM – 6:00 PM EST',
    venue: 'United Nations General Assembly Hall, UN Headquarters, New York, NY',
    speakers: 'UN Secretary-General, Foreign Ministers of Asian Member States, Council Diplomatic Observers',
    primaryImg: 'assets/events/unga-assembly-hall-plenary.jpg',
    primaryAlt: 'Faraz Ullah at the United Nations General Assembly Hall during 81st Session',
    gallery1: 'assets/events/unga-diplomatic-session-hall.jpg',
    gallery1Alt: 'Faraz Ullah Attending UNGA High-Level Plenary in New York',
    gallery2: 'assets/events/unga-multilateral-session-delegation.jpg',
    gallery2Alt: 'Seated Participation in UN General Assembly Session with Translation Audio',
    overview: 'The USA-Asia Council Foreign Policy Partnership participated as accredited observers at the 81st Session of the United Nations General Assembly at UN Headquarters in New York. The Council attended high-level general debate sessions where heads of state and foreign ministers addressed global security, multilateral climate resilience funds, and the stability of trans-Pacific shipping lanes.',
    deliberations: 'Council leadership engaged in multilateral sideline consultations with diplomatic representatives from across South and East Asia. Key discussions focused on multilateral peacekeeping commitments, international refugee assistance funding, and mobilizing climate adaptation finance for vulnerable coastal and riverine nations in South and Southeast Asia.',
    takeaways: [
      'Observer participation in the UN General Assembly General Debate on Pacific and South Asian stability.',
      'Sideline meetings on operationalizing loss-and-damage climate financing for Asian vulnerable nations.',
      'Advocacy for peaceful dispute resolution frameworks adhering to the UN Convention on the Law of the Sea (UNCLOS).',
      'Expanding non-governmental organization contributions to UN sustainable development goals in education and clean water.'
    ],
    quote: 'The United Nations General Assembly remains the premier global forum where great powers and emerging nations convene on equal footing to resolve differences through diplomacy rather than conflict.'
  },
  {
    slug: 'event-embassy-ambassador-masood-khan',
    filter: 'diplomatic',
    tag: 'BILATERAL DIPLOMACY',
    title: 'EMBASSY OF PAKISTAN STRATEGIC CONSULTATION WITH AMBASSADOR MASOOD KHAN',
    bgPos: 'center 25%',
    date: 'June 18, 2026',
    time: '11:00 AM – 2:00 PM EST',
    venue: 'Embassy of Pakistan, Diplomatic Enclave, Washington, DC',
    speakers: 'Ambassador Masood Khan, Council Executive Director Faraz Ullah, Commercial & Economic Counsellors',
    primaryImg: 'assets/events/embassy-ambassador-masood-khan.jpg',
    primaryAlt: 'Faraz Ullah with Ambassador Masood Khan at the Embassy of Pakistan in Washington DC',
    gallery1: 'assets/events/embassy-diplomatic-reception-handshake.jpg',
    gallery1Alt: 'Diplomatic Reception and Handshake at Embassy of Pakistan',
    gallery2: 'assets/events/diplomatic-forum-us-flag.jpg',
    gallery2Alt: 'Council Leadership at Diplomatic Mission Forum',
    overview: 'Council Executive Director Faraz Ullah was received at the Embassy of Pakistan in Washington, DC, by Ambassador Masood Khan for an in-depth bilateral strategy session. The meeting focused on strengthening multifaceted U.S.-Pakistan relations, expanding bilateral technology and agricultural trade, and fostering collaborative security in Central and South Asia.',
    deliberations: 'Ambassador Masood Khan and Faraz Ullah evaluated ongoing initiatives under the U.S.-Pakistan Green Alliance, emphasizing American investments in renewable energy, modern irrigation systems, and IT software export parks in Islamabad, Lahore, and Karachi. Both leaders noted that civilian economic ties provide the strongest foundation for enduring bilateral friendship.',
    takeaways: [
      'Roadmap for expanding bilateral trade volume beyond $12 billion with special focus on IT and value-added textiles.',
      'Review of joint initiatives under the U.S.-Pakistan Green Alliance for climate-smart agriculture and flood resilience.',
      'Facilitating direct partnerships between American venture capital firms and emerging Pakistani technology startups.',
      'Strengthening cultural and educational exchanges connecting Pakistani universities with American policy institutions.'
    ],
    quote: 'The relationship between the United States and Pakistan is pivotal to regional stability. Deepening trade, technology, and people-to-people connections creates a durable anchor for mutual prosperity.'
  },
  {
    slug: 'event-senator-van-hollen-dialogue',
    filter: 'congressional',
    tag: 'SENATE FOREIGN RELATIONS',
    title: 'STRATEGIC ASIA DIALOGUE WITH SENATOR CHRIS VAN HOLLEN',
    bgPos: 'center top',
    date: 'April 24, 2026',
    time: '12:00 PM – 2:30 PM EST',
    venue: 'Capitol Hill Foreign Affairs Forum, Washington, DC',
    speakers: 'Senator Chris Van Hollen (Senate Foreign Relations Committee), Council Executive Director Faraz Ullah, Senior Asia Policy Fellows',
    primaryImg: 'assets/events/senator-van-hollen-dialogue.jpg',
    primaryAlt: 'Faraz Ullah in Strategic Policy Discussion with Senator Chris Van Hollen',
    gallery1: 'assets/events/capitol-dome-legislative-consultation.jpg',
    gallery1Alt: 'Legislative Strategy Discussions outside the US Capitol',
    gallery2: 'assets/events/capitol-plaza-diplomatic-strategy.jpg',
    gallery2Alt: 'Council Strategists on Capitol Hill Plaza',
    overview: 'At a dedicated foreign policy forum on Capitol Hill, Council Executive Director Faraz Ullah convened with Senator Chris Van Hollen of the Senate Foreign Relations Committee. The working luncheon addressed critical issues of South Asian stability, disaster reconstruction aid, and expanding international development assistance through transparent multilateral mechanisms.',
    deliberations: 'Senator Van Hollen and Council leadership examined how congressional foreign policy initiatives can foster peaceful regional corridors and support civil society institutions across South Asia. The discussion highlighted the strategic importance of sustained American humanitarian support and economic partnership models that uplift local populations.',
    takeaways: [
      'Policy recommendations on U.S. foreign assistance authorizations for regional flood recovery and healthcare infrastructure.',
      'Exploration of congressional resolutions recognizing the vital civic contributions of Asian diaspora communities.',
      'Strategies for de-escalating regional friction through sustained track 1.5 diplomacy and multilateral trade incentives.',
      'Establishing a recurring dialogue channel between Council policy specialists and Senate Foreign Relations staff.'
    ],
    quote: 'Congressional diplomacy plays an indispensable role in signaling American reliability. Constructive partnerships in South Asia are essential for global peace and shared economic security.'
  },
  {
    slug: 'event-georgetown-mccourt-plenary',
    filter: 'academic',
    tag: 'ACADEMIC SYMPOSIUM',
    title: 'GEORGETOWN MCCOURT PLENARY: COMMUNITY IN DIVERSITY & GLOBAL POLICY',
    bgPos: 'center 30%',
    date: 'March 18, 2026',
    time: '1:00 PM – 5:30 PM EST',
    venue: 'McCourt School of Public Policy, Georgetown University, Washington, DC',
    speakers: 'McCourt School Faculty, Council Executive Director Faraz Ullah, Visiting Diplomatic Fellows, Graduate Scholars',
    primaryImg: 'assets/events/georgetown-diversity-plenary-wide.jpg',
    primaryAlt: 'Distinguished Assembly at Georgetown University McCourt School of Public Policy',
    gallery1: 'assets/events/georgetown-diversity-assembly-group.jpg',
    gallery1Alt: 'Georgetown Public Policy Assembly Group Photo',
    gallery2: 'assets/events/georgetown-podium-diplomatic-keynote.jpg',
    gallery2Alt: 'Faraz Ullah on Stage at Georgetown University McCourt School',
    overview: 'Georgetown University\'s McCourt School of Public Policy hosted the Council\'s major academic plenary, themed "Community in Diversity: Elevating Global Voices in Foreign Policy Formulation." The event convened university deans, foreign diplomats, diaspora community organizers, and emerging policy students to discuss how diversity enriches diplomatic strategy.',
    deliberations: 'Panelists delivered evidence-based presentations demonstrating that inclusive national security institutions make more nuanced and effective foreign policy decisions. Breakout sessions examined public diplomacy, cross-cultural negotiation strategies, and methods to integrate diaspora insights directly into Washington think tank research.',
    takeaways: [
      'Publication of joint symposium proceedings on diversifying the American foreign policy and national security workforce.',
      'Launch of the Georgetown-Council Graduate Policy Fellowship in Trans-Pacific Studies.',
      'Framework for incorporating diaspora-led economic research into federal international trade assessments.',
      'Commitment to annual joint convenings between academic researchers and active foreign policy practitioners.'
    ],
    quote: 'Our foreign policy is most powerful when it reflects the full breadth of America\'s diverse talent, insights, and global cultural connections.'
  },
  {
    slug: 'event-congressman-andy-kim',
    filter: 'congressional',
    tag: 'CONGRESSIONAL FORUM',
    title: 'INDO-PACIFIC DIPLOMATIC FORUM WITH CONGRESSMAN ANDY KIM',
    bgPos: 'center 15%',
    date: 'July 9, 2026',
    time: '2:00 PM – 4:30 PM EST',
    venue: 'Rayburn House Office Building & Congressional Corridor, Washington, DC',
    speakers: 'Representative Andy Kim, Council Executive Director Faraz Ullah, Congressional National Security Staff',
    primaryImg: 'assets/events/congressman-andy-kim-dialogue.jpg',
    primaryAlt: 'Faraz Ullah with Congressman Andy Kim in the Congressional Corridor',
    gallery1: 'assets/events/house-representatives-briefing-room.jpg',
    gallery1Alt: 'US House of Representatives Committee Hearing Room Briefing',
    gallery2: 'assets/events/capitol-grounds-policy-briefing.jpg',
    gallery2Alt: 'Council Delegation on Capitol Hill Grounds',
    overview: 'Council Executive Director Faraz Ullah met with Representative Andy Kim in Washington, DC, for a comprehensive dialogue on Indo-Pacific diplomacy, East Asian security architecture, and fostering bipartisan support for international diplomatic engagement.',
    deliberations: 'The consultation addressed deterrence and crisis de-escalation protocols in the Taiwan Strait and East China Sea, strengthening civilian technology alliances between the United States and democratic Asian allies, and supporting diplomatic families and service members stationed across the Pacific theater.',
    takeaways: [
      'Bipartisan strategies for reinforcing diplomatic deterrence while maintaining open channels of communication.',
      'Expansion of congressional caucuses championing peaceful Indo-Pacific trade and security alliances.',
      'Analysis of economic resilience strategies to mitigate semiconductor supply shocks.',
      'Enhanced support for Asian-American foreign service officers and policy analysts.'
    ],
    quote: 'Smart, principled foreign policy requires constant engagement with both allies and regional partners to prevent miscalculation and preserve peace.'
  },
  {
    slug: 'event-world-bank-infrastructure-forum',
    filter: 'academic',
    tag: 'INTERNATIONAL FINANCE',
    title: 'WORLD BANK GROUP FORUM: FINANCING ASIA’S CLEAN ENERGY & INFRASTRUCTURE',
    bgPos: 'center 45%',
    date: 'October 8, 2026',
    time: '9:00 AM – 3:30 PM EST',
    venue: 'World Bank Group Headquarters Atrium, 1818 H Street NW, Washington, DC',
    speakers: 'World Bank Vice Presidents for South & East Asia, Council Executive Director Faraz Ullah, Development Finance Economists',
    primaryImg: 'assets/events/world-bank-headquarters-forum.jpg',
    primaryAlt: 'Faraz Ullah at World Bank Group Headquarters Atrium in Washington DC',
    gallery1: 'assets/events/diplomatic-forum-us-flag.jpg',
    gallery1Alt: 'Council Leadership at Diplomatic Mission Forum',
    gallery2: 'assets/events/council-official-seal-crest.jpg',
    gallery2Alt: 'Official Seal of the Council',
    overview: 'Council Executive Director Faraz Ullah participated in high-level consultations at the World Bank Group Headquarters in Washington, DC. The forum addressed mobilizing private and multilateral capital for Asia\'s clean energy transition, cross-border grid interconnections, and climate-resilient municipal infrastructure.',
    deliberations: 'Discussions evaluated how blended finance models and multilateral risk guarantees can accelerate renewable energy deployments in developing Asian markets. Faraz Ullah highlighted the urgent need to streamline project approvals for water storage, solar installations, and green hydrogen hubs across South Asia.',
    takeaways: [
      'Strategic analysis of World Bank Group concessional loan pipelines for Asian renewable energy grids.',
      'Framework for de-risking private sector investment in clean transport and port infrastructure.',
      'Recommendations on expanding technical assistance grants for municipal climate adaptation.',
      'Strengthening coordination between international financial institutions and bilateral development agencies.'
    ],
    quote: 'Sustainable infrastructure financing is the bedrock of future stability. When multilateral institutions invest in clean energy, they build long-term economic resilience.'
  },
  {
    slug: 'event-unga-multilateral-session',
    filter: 'un',
    tag: 'UNGA MULTILATERAL FORUM',
    title: 'UN GENERAL ASSEMBLY SPECIAL SESSION ON REGIONAL DISPUTE DE-ESCALATION',
    bgPos: 'center 60%',
    date: 'September 24, 2026',
    time: '10:00 AM – 4:00 PM EST',
    venue: 'United Nations Headquarters Main Floor, New York, NY',
    speakers: 'Special Envoys to South Asia, Council Executive Director Faraz Ullah, Multilateral Negotiators',
    primaryImg: 'assets/events/unga-multilateral-session-delegation.jpg',
    primaryAlt: 'Faraz Ullah Seated at UN General Assembly Multilateral Session with Simultaneous Translation',
    gallery1: 'assets/events/unga-assembly-hall-plenary.jpg',
    gallery1Alt: 'UN General Assembly Hall Plenary View',
    gallery2: 'assets/events/unga-global-delegates-council.jpg',
    gallery2Alt: 'Council Delegation with International Diplomatic Delegates at UNGA',
    overview: 'During UNGA High-Level Week, Council Executive Director Faraz Ullah attended specialized committee sessions in the General Assembly Hall equipped with simultaneous translation. The session reviewed diplomatic mediation frameworks, confidence-building mechanisms, and international humanitarian corridors in contested geopolitical zones.',
    deliberations: 'Delegates examined case studies in preventive diplomacy, water treaty preservation, and multilateral crisis de-escalation protocols. Faraz Ullah emphasized the importance of non-governmental policy dialogues in providing neutral ground for consensus-building when formal bilateral tracks face gridlock.',
    takeaways: [
      'Advocacy for revitalizing multilateral mediation mechanisms within the UN Department of Political and Peacebuilding Affairs.',
      'Review of nuclear risk reduction agreements and hot-line protocols between regional neighbors.',
      'Exploration of international legal frameworks protecting civilian infrastructure during cross-border tensions.',
      'Integration of track-two policy recommendations into official UN regional reports.'
    ],
    quote: 'Effective multilateral diplomacy requires active listening, patience, and unwavering dedication to peaceful resolution under international law.'
  },
  {
    slug: 'event-youth-capitol-hill-advocacy',
    filter: 'congressional',
    tag: 'NEXTGEN ADVOCACY',
    title: 'CAPITOL HILL YOUTH INITIATIVE: EMPOWERING YOUNG VOICES IN FOREIGN POLICY',
    bgPos: 'center center',
    date: 'March 27, 2026',
    time: '8:30 AM – 5:30 PM EST',
    venue: 'United States Capitol Visitor Center & Congressional Meeting Rooms, Washington, DC',
    speakers: 'Bipartisan Members of Congress, Council Youth Mentors, Emerging Foreign Policy Scholars, Student Delegates',
    primaryImg: 'assets/events/youth-capitol-hill-advocacy-day.jpg',
    primaryAlt: 'Capitol Hill For All The Youth Empowerment Banner and Delegation',
    gallery1: 'assets/events/capitol-grounds-policy-briefing.jpg',
    gallery1Alt: 'Youth Delegates on the US Capitol Grounds',
    gallery2: 'assets/events/capitol-plaza-diplomatic-strategy.jpg',
    gallery2Alt: 'Youth Working Session on Capitol Hill Plaza',
    overview: 'The Council hosted its flagship youth empowerment event: "Capitol Hill for All the Youth: Engage, Learn, Make an Impact." Over 150 students, young scholars, and early-career diaspora professionals converged on the U.S. Capitol complex to meet lawmakers, learn policy drafting, and explore careers in international relations.',
    deliberations: 'The day featured interactive advocacy workshops, legislative simulation sessions, and direct meetings with House and Senate foreign affairs staffers. Participants presented youth-authored policy memorandums on climate migration, human rights protections, and educational exchange programs.',
    takeaways: [
      'Over 40 direct congressional meetings conducted by youth delegations with members of the House and Senate.',
      'Launch of the Council\'s 2026 NextGen Mentorship Program pairing students with former ambassadors and senior analysts.',
      'Presentation of the Youth Foreign Policy White Paper to the Congressional Asian Pacific American Caucus.',
      'Commitment to expand the Capitol Hill Youth Delegation initiative to a nationwide semi-annual program.'
    ],
    quote: 'The future of foreign policy belongs to the next generation. By opening the doors of Capitol Hill to diverse youth voices, we ensure America\'s diplomatic future remains visionary and inclusive.'
  },
  {
    slug: 'event-washington-diplomatic-reception',
    filter: 'diplomatic',
    tag: 'EMBASSY RECEPTION',
    title: 'WASHINGTON DIPLOMATIC CORPS RECEPTION: EXPANDING U.S.–SOUTH ASIA COMMERCE',
    bgPos: 'center top',
    date: 'June 20, 2026',
    time: '6:00 PM – 9:00 PM EST',
    venue: 'Embassy Diplomatic Reception Hall, Washington, DC',
    speakers: 'Ambassador Masood Khan, Council Executive Director Faraz Ullah, Chamber of Commerce Representatives, Corporate Executives',
    primaryImg: 'assets/events/embassy-diplomatic-reception-handshake.jpg',
    primaryAlt: 'Faraz Ullah with Ambassador Masood Khan and Senior Diplomat at Reception Handshake',
    gallery1: 'assets/events/embassy-ambassador-masood-khan.jpg',
    gallery1Alt: 'Ambassador Masood Khan with Faraz Ullah at Embassy Flags',
    gallery2: 'assets/events/community-diaspora-reception.jpg',
    gallery2Alt: 'Community Leaders at Diaspora Reception',
    overview: 'A celebratory diplomatic reception brought together diplomats, American business leaders, and Pakistani-American community executives to celebrate expanding bilateral commercial partnerships and private sector joint ventures.',
    deliberations: 'The event highlighted recent successes in digital economy cooperation, cross-border fintech services, and high-tech manufacturing investments. Keynote speakers underscored that trade, mutual investment, and commercial collaboration form the most enduring bonds between democratic societies.',
    takeaways: [
      'Announcement of multiple private sector MoUs in digital healthcare and software development.',
      'Establishment of the U.S.-Pakistan Trade and Technology Advisory Forum.',
      'Recognition of outstanding diaspora entrepreneurs contributing to bilateral export growth.',
      'Strengthened commercial liaison between the Embassy economic division and American trade councils.'
    ],
    quote: 'Commerce and cultural exchange are the true catalysts of international partnership. Tonight demonstrates the immense potential of commercial diplomacy.'
  },
  {
    slug: 'event-congressman-gabe-amo',
    filter: 'congressional',
    tag: 'HOUSE FOREIGN AFFAIRS',
    title: 'HOUSE FOREIGN AFFAIRS & USAID CONSULTATION WITH REP. GABE AMO',
    bgPos: 'center 15%',
    date: 'May 21, 2026',
    time: '11:30 AM – 1:30 PM EST',
    venue: 'U.S. House Foreign Affairs Committee Hearing Suite, Washington, DC',
    speakers: 'Representative Gabe Amo, Council Executive Director Faraz Ullah, USAID Senior Advisors',
    primaryImg: 'assets/events/congressman-gabe-amo-usaid.jpg',
    primaryAlt: 'Faraz Ullah in Discussion with Congressman Gabe Amo on House Foreign Affairs and USAID',
    gallery1: 'assets/events/house-representatives-briefing-room.jpg',
    gallery1Alt: 'US House of Representatives Committee Hearing Room',
    gallery2: 'assets/events/capitol-senate-schumer-office.jpg',
    gallery2Alt: 'Senate Corridor Policy Engagement',
    overview: 'Council Executive Director Faraz Ullah consulted with Representative Gabe Amo of the House Foreign Affairs Committee regarding international development assistance (USAID), humanitarian aid oversight, and modernizing democratic governance initiatives in Asia.',
    deliberations: 'The dialogue focused on ensuring foreign aid allocations are transparent, efficient, and targeted toward local community resilience. Representative Amo and Faraz Ullah discussed how development programs can partner with local civil society to maximize long-term outcomes in public health, clean water, and civic education.',
    takeaways: [
      'Briefing on USAID development assistance allocations for climate-impacted regions in Asia.',
      'Legislative review of foreign aid authorization bills under consideration in the House Foreign Affairs Committee.',
      'Advocacy for increasing direct grants to vetted local non-governmental organizations on the ground.',
      'Establishing a consultative mechanism between the Council and House Foreign Affairs subcommittee staff.'
    ],
    quote: 'Development assistance is not charity; it is a strategic investment in global peace, stability, and mutual human dignity.'
  },
  {
    slug: 'event-georgetown-leadership-assembly',
    filter: 'academic',
    tag: 'POLICY ASSEMBLY',
    title: 'GEORGETOWN PUBLIC POLICY ASSEMBLY: ASIAN DIPLOMACY IN THE 21ST CENTURY',
    bgPos: 'center 30%',
    date: 'March 19, 2026',
    time: '2:00 PM – 6:00 PM EST',
    venue: 'Georgetown University McCourt Executive Hall, Washington, DC',
    speakers: 'Senior Foreign Policy Analysts, Council Executive Leadership, Asian Diplomatic Fellows',
    primaryImg: 'assets/events/georgetown-diversity-assembly-group.jpg',
    primaryAlt: 'Distinguished Policy Assembly at Georgetown McCourt School',
    gallery1: 'assets/events/georgetown-diversity-plenary-wide.jpg',
    gallery1Alt: 'Georgetown McCourt Plenary View',
    gallery2: 'assets/events/georgetown-podium-diplomatic-keynote.jpg',
    gallery2Alt: 'Keynote Dialogue on Georgetown Stage',
    overview: 'A specialized assembly of university scholars, international policy fellows, and diaspora leaders convened at Georgetown University to formulate forward-looking diplomatic models for Asian foreign policy cooperation in 2026 and beyond.',
    deliberations: 'Sessions tackled strategic autonomy among ASEAN states, South Asian regional economic integration, and the role of middle powers in mediating global tensions. Fellows drafted comprehensive policy recommendations aimed at revitalizing regional multilateral institutions.',
    takeaways: [
      'Drafting of the Georgetown-Council Policy Brief on Regional Integration in South Asia.',
      'Analysis of trade diversification strategies away from single-source supply chain bottlenecks.',
      'Expansion of university-think tank partnerships for empirical international relations research.',
      'Creation of an open-access digital archive of diplomatic case studies for policy students.'
    ],
    quote: 'Academic rigor coupled with diplomatic realism provides the clearest vision for navigating complex international transitions.'
  },
  {
    slug: 'event-unga-transpacific-consultations',
    filter: 'un',
    tag: 'DIPLOMATIC CONSULTATION',
    title: 'UN GENERAL ASSEMBLY HIGH-LEVEL WEEK: MULTILATERAL CONVENING AT UNHQ',
    bgPos: 'center 40%',
    date: 'September 23, 2026',
    time: '11:00 AM – 4:30 PM EST',
    venue: 'United Nations Headquarters General Assembly Complex, New York, NY',
    speakers: 'Council Executive Director Faraz Ullah, Asian Delegation Heads, UN Department of Political Affairs',
    primaryImg: 'assets/events/unga-diplomatic-session-hall.jpg',
    primaryAlt: 'Faraz Ullah at the United Nations General Assembly Hall during High-Level Week',
    gallery1: 'assets/events/unga-assembly-hall-plenary.jpg',
    gallery1Alt: 'UN General Assembly Hall Plenary View',
    gallery2: 'assets/events/unga-global-delegates-council.jpg',
    gallery2Alt: 'Council Delegation with International Delegates',
    overview: 'During the bustling UNGA High-Level Week in New York, Council leadership participated in a series of bilateral and multilateral consultations within the UN Headquarters complex, engaging foreign ministry officials on regional stability agreements.',
    deliberations: 'Consultations examined the implementation of multilateral treaties, maritime safety protocols in the Indian and Pacific Oceans, and joint international efforts to counter disinformation in diplomatic reporting.',
    takeaways: [
      'Sideline meetings with delegates from five Asian partner states on maritime security protocols.',
      'Review of UN peacebuilding initiatives in post-conflict and climate-vulnerable zones.',
      'Advocacy for enhanced non-governmental consultative status at UN bodies.',
      'Strengthening partnerships between American think tanks and international diplomatic missions.'
    ],
    quote: 'Every bilateral dialogue held within the halls of the United Nations strengthens the global fabric of peace and mutual accountability.'
  },
  {
    slug: 'event-house-briefing-asia-partnerships',
    filter: 'congressional',
    tag: 'CAPITOL HILL BRIEFING',
    title: 'U.S. HOUSE OF REPRESENTATIVES COMMITTEE BRIEFING ON ASIA PARTNERSHIPS',
    bgPos: 'center 25%',
    date: 'May 28, 2026',
    time: '1:30 PM – 4:00 PM EST',
    venue: 'U.S. House of Representatives Committee Hearing Room, Capitol Complex, Washington, DC',
    speakers: 'House Foreign Affairs Committee Staff, Council Executive Director Faraz Ullah, Trade Policy Witnesses',
    primaryImg: 'assets/events/house-representatives-briefing-room.jpg',
    primaryAlt: 'Faraz Ullah in U.S. House of Representatives Committee Room during Asia Briefing',
    gallery1: 'assets/events/congressman-gabe-amo-usaid.jpg',
    gallery1Alt: 'Faraz Ullah with Congressman Gabe Amo',
    gallery2: 'assets/events/capitol-grounds-policy-briefing.jpg',
    gallery2Alt: 'Council Delegation on Capitol Hill Grounds',
    overview: 'In a dedicated committee room inside the U.S. House of Representatives, Council Executive Director Faraz Ullah and invited policy witnesses presented a strategic briefing on 2026 legislative priorities for Asian trade, energy security, and defense partnerships.',
    deliberations: 'Witnesses and congressional aides discussed critical supply chain resilience, technology transfer oversight, and strategies to prevent disruptions in global commercial shipping. The briefing emphasized bipartisan approaches to strengthening Asian partnerships.',
    takeaways: [
      'Presentation of the Council\'s 2026 Legislative Briefing Book to House Foreign Affairs committee staff.',
      'Bipartisan review of export control frameworks for sensitive artificial intelligence and quantum computing technologies.',
      'Strategies for encouraging American foreign direct investment in sustainable Asian manufacturing.',
      'Establishment of regular quarterly staff briefings between Council fellows and congressional committees.'
    ],
    quote: 'Rigorous congressional committee briefings ensure that American policy is rooted in up-to-date economic realities and strategic foresight.'
  },
  {
    slug: 'event-georgetown-keynote-dialogue',
    filter: 'academic',
    tag: 'KEYNOTE DIALOGUE',
    title: 'GEORGETOWN MCCOURT STAGE: NAVIGATING U.S.–ASIA GEOPOLITICAL TRANSITIONS',
    bgPos: 'center 20%',
    date: 'March 20, 2026',
    time: '4:00 PM – 6:30 PM EST',
    venue: 'McCourt School Auditorium Stage, Georgetown University, Washington, DC',
    speakers: 'Senior Visiting Diplomatic Envoy, Council Executive Director Faraz Ullah',
    primaryImg: 'assets/events/georgetown-podium-diplomatic-keynote.jpg',
    primaryAlt: 'Faraz Ullah Keynote Dialogue on Stage at Georgetown McCourt School',
    gallery1: 'assets/events/georgetown-diversity-plenary-wide.jpg',
    gallery1Alt: 'Audience View at Georgetown McCourt School Plenary',
    gallery2: 'assets/events/sapri-policy-dialogue-leaders.jpg',
    gallery2Alt: 'SAPRI Policy Leaders at Strategic Dialogue',
    overview: 'On the main stage of Georgetown University\'s McCourt School of Public Policy, Council Executive Director Faraz Ullah and a senior diplomatic envoy delivered a keynote dialogue addressing rapid geopolitical transitions across Asia.',
    deliberations: 'The dialogue explored the delicate balance between economic deterrence and diplomatic engagement, managing competition without conflict, and empowering young professionals to pursue careers in statecraft and international dispute resolution.',
    takeaways: [
      'In-depth exploration of diplomatic de-escalation models in maritime dispute areas.',
      'Analysis of multilateral consensus-building among emerging Asian middle powers.',
      'Q&A session with Georgetown graduate scholars on careers in international policy and diplomacy.',
      'Commitment to publish the keynote remarks as an official Council Occasional Paper.'
    ],
    quote: 'True statesmanship lies not in escalating friction, but in discovering common ground that protects vital interests while averting catastrophe.'
  },
  {
    slug: 'event-community-diaspora-reception',
    filter: 'council',
    tag: 'COMMUNITY & DIASPORA',
    title: 'ASIAN-AMERICAN DIASPORA & DIPLOMATIC COMMUNITY LEADERSHIP RECEPTION',
    bgPos: 'center top',
    date: 'August 15, 2026',
    time: '6:30 PM – 9:30 PM EST',
    venue: 'Metropolitan Community Banquet & Cultural Center, Washington, DC',
    speakers: 'Council Executive Director Faraz Ullah, Prominent Community Philanthropists, Diaspora Entrepreneurs',
    primaryImg: 'assets/events/community-diaspora-reception.jpg',
    primaryAlt: 'Faraz Ullah with Community Leaders at Diaspora Leadership Reception',
    gallery1: 'assets/events/council-first-annual-meeting-2026.jpg',
    gallery1Alt: 'Council First Annual Meeting Leadership Group',
    gallery2: 'assets/events/diplomatic-forum-us-flag.jpg',
    gallery2Alt: 'Diplomatic Mission Forum with US Flag',
    overview: 'The Council hosted a high-spirited leadership reception bringing together prominent Asian-American community leaders, entrepreneurs, civic organizers, and foreign policy professionals to celebrate diaspora contributions to American diplomacy.',
    deliberations: 'Speakers discussed mobilising community resources to support humanitarian disaster relief, establishing scholarships for underrepresented students in foreign policy, and strengthening the voice of Asian-American communities in Washington policy circles.',
    takeaways: [
      'Pledge of $500,000 in private diaspora matching funds for international disaster recovery and education.',
      'Formation of the Asian-American Civic Leadership Network in the greater Washington metropolitan area.',
      'Initiation of a quarterly policy salon series connecting community leaders directly with think tank analysts.',
      'Celebration of cultural heritage and civic leadership across all generations of the diaspora.'
    ],
    quote: 'Diaspora communities are America\'s greatest diplomatic bridge. Their cultural knowledge, familial ties, and entrepreneurial drive build unbreakable bonds across oceans.'
  },
  {
    slug: 'event-unga-delegation-assembly',
    filter: 'un',
    tag: 'GLOBAL DELEGATION',
    title: 'UNGA DIPLOMATIC COUNCIL ASSEMBLY: TRANS-PACIFIC PEACE & SECURITY FORUM',
    bgPos: 'center 40%',
    date: 'September 25, 2026',
    time: '2:00 PM – 5:30 PM EST',
    venue: 'United Nations Delegates Lounge & Plenary Gallery, UNHQ, New York, NY',
    speakers: 'Council Executive Director Faraz Ullah, Senior Diplomatic Counsellors, UN Regional Representatives',
    primaryImg: 'assets/events/unga-global-delegates-council.jpg',
    primaryAlt: 'Faraz Ullah with International Diplomatic Delegates inside UN General Assembly Hall',
    gallery1: 'assets/events/unga-assembly-hall-plenary.jpg',
    gallery1Alt: 'UN General Assembly Hall Plenary View',
    gallery2: 'assets/events/unga-multilateral-session-delegation.jpg',
    gallery2Alt: 'Seated Participation in UN General Assembly Session',
    overview: 'A joint delegation of Council policy fellows and international diplomats convened at UNHQ for a dedicated working session on trans-Pacific peace, nuclear risk reduction, and regional trade security.',
    deliberations: 'Delegates analyzed progress on multilateral arms control treaties, marine environmental protections in the Pacific, and regional cooperative mechanisms aimed at maintaining stability during geopolitical friction.',
    takeaways: [
      'Joint communiqué calling for reinforced nuclear confidence-building measures in South Asia.',
      'Proposal for an annual Trans-Pacific Maritime Safety and Environmental Protection Working Group.',
      'Support for expanding youth and civil society representation in UN disarmament forums.',
      'Strengthened ties between non-governmental policy institutes and UN permanent missions.'
    ],
    quote: 'Peace is never passive; it is built through relentless, day-by-day diplomatic negotiation and institutionalized cooperation.'
  },
  {
    slug: 'event-capitol-legislative-strategy',
    filter: 'congressional',
    tag: 'LEGISLATIVE STRATEGY',
    title: 'U.S. CAPITOL POLICY DELEGATION: ADVANCING BILATERAL LEGISLATIVE PRIORITIES',
    bgPos: 'center 38%',
    date: 'June 4, 2026',
    time: '9:30 AM – 1:00 PM EST',
    venue: 'U.S. Capitol East Front Plaza & Legislative Committee Rooms, Washington, DC',
    speakers: 'Council Executive Director Faraz Ullah, Council Chief Legislative Strategist, Congressional Aides',
    primaryImg: 'assets/events/capitol-grounds-policy-briefing.jpg',
    primaryAlt: 'Faraz Ullah and Council Delegates with Legislative Briefing Folders on US Capitol Grounds',
    gallery1: 'assets/events/capitol-dome-legislative-consultation.jpg',
    gallery1Alt: 'Legislative Strategy Discussions outside the US Capitol',
    gallery2: 'assets/events/capitol-plaza-diplomatic-strategy.jpg',
    gallery2Alt: 'Council Strategists on Capitol Hill Plaza',
    overview: 'Council leadership and senior policy delegates conducted an intensive day of legislative briefings across the Capitol Hill complex, delivering tailored foreign policy memorandums to key Senate and House foreign affairs staff.',
    deliberations: 'Delegates focused on legislation related to critical minerals procurement from friendly Asian partners, reauthorization of civilian cooperation programs, and funding for climate-smart infrastructure development.',
    takeaways: [
      'Delivery of the Council\'s 2026 Indo-Pacific Legislative Memorandum to 35 congressional offices.',
      'Briefing sessions on bipartisan bills promoting supply chain resilience and friend-shoring.',
      'Advocacy for balanced trade policy that avoids unintended economic fallout for developing Asian economies.',
      'Coordinating upcoming congressional member study trips to key Asian capitals.'
    ],
    quote: 'Direct, substantive engagement with congressional committees is essential to translating foreign policy research into durable legislation.'
  },
  {
    slug: 'event-sapri-strategic-roundtable',
    filter: 'academic',
    tag: 'THINK TANK ROUNDTABLE',
    title: 'SOUTH ASIAN POLICY RESEARCH INSTITUTE (SAPRI) STRATEGIC ROUNDTABLE',
    bgPos: 'center 20%',
    date: 'July 22, 2026',
    time: '10:00 AM – 3:00 PM EST',
    venue: 'SAPRI Policy Suite & National Think Tank Conference Center, Washington, DC',
    speakers: 'Elder Statesman & Senior Diplomats, SAPRI Executive Leadership, Council Executive Director Faraz Ullah',
    primaryImg: 'assets/events/sapri-policy-dialogue-leaders.jpg',
    primaryAlt: 'Faraz Ullah with Elder Statesman and SAPRI Leadership at Strategic Roundtable',
    gallery1: 'assets/events/georgetown-diversity-assembly-group.jpg',
    gallery1Alt: 'Georgetown McCourt Public Policy Assembly',
    gallery2: 'assets/events/diplomatic-forum-us-flag.jpg',
    gallery2Alt: 'Council Leadership at Diplomatic Reception',
    overview: 'In partnership with the South Asian Policy Research Institute (SAPRI), the Council convened a private strategic roundtable with distinguished elder statesmen, former ambassadors, and leading academic researchers to examine regional cooperation in South Asia.',
    deliberations: 'Discussions addressed cross-border water sharing treaties, renewable energy trade across regional grids, and de-escalating military tensions through verifiable confidence-building measures and economic interdependence.',
    takeaways: [
      'Formulation of joint policy recommendations on preserving Indus Basin water management protocols.',
      'Analysis of cross-border electricity trading frameworks connecting Central and South Asia.',
      'Endorsement of regular track-two diplomatic exchanges between retired military and diplomatic officials.',
      'Publication of a collaborative monograph on South Asian economic integration in 2026.'
    ],
    quote: 'Decades of diplomatic experience teach us that sustainable peace requires patience, institutional memory, and deep mutual understanding.'
  },
  {
    slug: 'event-diplomatic-mission-forum',
    filter: 'diplomatic',
    tag: 'DIPLOMATIC FORUM',
    title: 'WASHINGTON DIPLOMATIC ROUNDTABLE: CELEBRATING U.S.–ASIA PARTNERSHIPS',
    bgPos: 'center 25%',
    date: 'February 12, 2026',
    time: '5:00 PM – 8:30 PM EST',
    venue: 'The Diplomatic Pavilion & Grand Atrium, Washington, DC',
    speakers: 'Council Executive Director Faraz Ullah, Asian Diplomatic Corps Chiefs of Mission, U.S. State Department Officials',
    primaryImg: 'assets/events/diplomatic-forum-us-flag.jpg',
    primaryAlt: 'Faraz Ullah and Colleague at Diplomatic Mission Forum beside the American Flag',
    gallery1: 'assets/events/embassy-ambassador-masood-khan.jpg',
    gallery1Alt: 'Ambassador Masood Khan with Faraz Ullah at Embassy Flags',
    gallery2: 'assets/events/world-bank-headquarters-forum.jpg',
    gallery2Alt: 'World Bank Group Headquarters Forum',
    overview: 'A prestigious diplomatic gathering brought together envoys from across Asia, American foreign policy officials, and Council leadership to celebrate bilateral milestones and reaffirm shared commitments to regional peace and rule of law.',
    deliberations: 'Speeches and roundtable sessions focused on honoring 75+ years of diplomatic ties with key Asian allies, expanding educational exchanges through Fulbright and sister-city networks, and addressing non-traditional security threats.',
    takeaways: [
      'Commemoration of landmark diplomatic anniversaries between the United States and Asian nations.',
      'Announcement of expanded bilateral student exchange fellowships.',
      'High-level endorsement of Council policy initiatives by attending diplomatic mission chiefs.',
      'Commitment to establishing bi-monthly diplomatic roundtable sessions in Washington.'
    ],
    quote: 'The American flag represents a promise of freedom, partnership, and mutual progress when we engage the world with dignity and open dialogue.'
  },
  {
    slug: 'event-senate-corridor-consultations',
    filter: 'congressional',
    tag: 'SENATE ENGAGEMENT',
    title: 'SENATE CORRIDOR CONSULTATIONS: BIPARTISAN ASIA TRADE & DEFENSE DIALOGUE',
    bgPos: 'center top',
    date: 'May 15, 2026',
    time: '1:30 PM – 4:00 PM EST',
    venue: 'U.S. Senate Russell & Hart Office Buildings, Washington, DC',
    speakers: 'Council Executive Director Faraz Ullah, Senate Foreign Relations & Armed Services Policy Advisors',
    primaryImg: 'assets/events/senate-office-schumer-engagement.jpg',
    primaryAlt: 'Faraz Ullah Engaged in Senate Corridor Policy Consultations',
    gallery1: 'assets/events/capitol-senate-schumer-office.jpg',
    gallery1Alt: 'Outside the Office of Senator Schumer',
    gallery2: 'assets/events/capitol-dome-legislative-consultation.jpg',
    gallery2Alt: 'Legislative Strategy Consultations outside Capitol',
    overview: 'Continuing the Council\'s intensive Senate engagement, Executive Director Faraz Ullah met with senior legislative directors across the Russell and Hart Senate office buildings to address pending trade agreements, export controls, and defense authorizations.',
    deliberations: 'Discussions explored how Senate committees can promote friend-shoring of critical pharmaceuticals and rare-earth processing facilities in South and Southeast Asia while maintaining strict labor and environmental standards.',
    takeaways: [
      'Targeted analysis of the National Defense Authorization Act (NDAA) Asia-Pacific provisions.',
      'Review of legislative protections for critical mineral supply agreements with partner nations.',
      'Advocacy for expanding H-1B and specialized STEM visa processing for allied Asian scholars.',
      'Reinforcement of bipartisan support for civilian commercial treaties in Asia.'
    ],
    quote: 'Constructive legislative work in the Senate corridors shapes the global strategic landscape for decades to come.'
  },
  {
    slug: 'event-congressional-policy-coordination',
    filter: 'congressional',
    tag: 'POLICY COORDINATION',
    title: 'CONGRESSIONAL STRATEGY CONSULTATION: CRITICAL TECH & ASIAN SUPPLY CHAINS',
    bgPos: 'center 45%',
    date: 'June 10, 2026',
    time: '10:30 AM – 2:30 PM EST',
    venue: 'United States Capitol Plazas & Legislative Strategy Suites, Washington, DC',
    speakers: 'Council Executive Director Faraz Ullah, Technology & Trade Legislative Directors',
    primaryImg: 'assets/events/capitol-dome-legislative-consultation.jpg',
    primaryAlt: 'Faraz Ullah and Colleague in Legislative Policy Consultation outside US Capitol Dome',
    gallery1: 'assets/events/capitol-plaza-diplomatic-strategy.jpg',
    gallery1Alt: 'Strategic Discussions on Capitol Hill Plaza',
    gallery2: 'assets/events/house-representatives-briefing-room.jpg',
    gallery2Alt: 'US House Briefing Room Session',
    overview: 'Council policy directors held outdoor strategy working sessions on the Capitol grounds reviewing semiconductor fabrication timetables, quantum computing safety frameworks, and allied supply chain resilience.',
    deliberations: 'The consultation examined progress on bilateral technology sharing agreements with Asian democracies, assessing how coordinated export controls can protect sensitive intellectual property while encouraging civilian high-tech innovation.',
    takeaways: [
      'Presentation of technical assessments on semiconductor advanced packaging hubs in East and South Asia.',
      'Strategies for coordinating supply chain diversification across allied maritime corridors.',
      'Analysis of AI safety governance frameworks for trans-Pacific commercial deployment.',
      'Coordination with congressional staff on upcoming technology competitiveness hearings.'
    ],
    quote: 'Technological leadership requires not only domestic innovation, but deep, trusted alliances that secure global supply lines.'
  },
  {
    slug: 'event-capitol-plaza-strategy',
    filter: 'congressional',
    tag: 'STRATEGIC SESSION',
    title: 'CAPITOL HILL WORKING SESSION: INDO-PACIFIC ALLIANCE STRENGTHENING',
    bgPos: 'center 45%',
    date: 'June 11, 2026',
    time: '11:00 AM – 3:00 PM EST',
    venue: 'United States Capitol Plaza & Senate Park, Washington, DC',
    speakers: 'Council Executive Director Faraz Ullah, Council Senior Fellows in Asian Geopolitics',
    primaryImg: 'assets/events/capitol-plaza-diplomatic-strategy.jpg',
    primaryAlt: 'Faraz Ullah Strategizing with Policy Colleague on Capitol Plaza',
    gallery1: 'assets/events/capitol-grounds-policy-briefing.jpg',
    gallery1Alt: 'Council Delegation on Capitol Hill Grounds',
    gallery2: 'assets/events/youth-capitol-hill-advocacy-day.jpg',
    gallery2Alt: 'Youth Advocacy on Capitol Hill',
    overview: 'On the sunlit grounds of Capitol Hill Plaza, Council policy leaders conducted a comprehensive review of strategic initiatives for the upcoming legislative calendar, finalizing policy memos for House and Senate committees.',
    deliberations: 'The team refined policy proposals concerning maritime deterrence, regional humanitarian aid coordination, and expanding academic exchange fellowships between American universities and Asian institutions.',
    takeaways: [
      'Finalization of the Council\'s 2026 Summer Policy Blueprint for the Congressional Asia Caucus.',
      'Review of upcoming committee hearing testimony on regional economic partnerships.',
      'Strategic planning for nationwide youth advocacy days in the fall legislative cycle.',
      'Coordination of track-two diplomatic delegations visiting partner capitals in Asia.'
    ],
    quote: 'Clear strategic planning is the foundation of effective advocacy. Our presence on Capitol Hill ensures that nuanced foreign policy perspectives are heard.'
  },
  {
    slug: 'event-council-charter-launch',
    filter: 'council',
    tag: 'COUNCIL CHARTER',
    title: 'OFFICIAL SEAL & CHARTER LAUNCH: USA-ASIA FOREIGN POLICY PARTNERSHIP',
    bgPos: 'center center',
    date: 'January 15, 2026',
    time: '10:00 AM – 1:00 PM EST',
    venue: 'National Press Club & Council Headquarters, Washington, DC',
    speakers: 'Council Founders, Executive Director Faraz Ullah, Distinguished Advisory Board Members',
    primaryImg: 'assets/events/council-official-seal-crest.jpg',
    primaryAlt: 'Official Seal and Emblem of the USA-Asia Foreign Policy Partnership Council',
    gallery1: 'assets/events/council-first-annual-meeting-2026.jpg',
    gallery1Alt: 'Council First Annual Meeting August 2026',
    gallery2: 'assets/events/diplomatic-forum-us-flag.jpg',
    gallery2Alt: 'Diplomatic Mission Forum with US Flag',
    overview: 'The formal unveiling and official ratification of the Council\'s founding charter and official seal took place at the National Press Club in Washington, DC. The event marked the official launch of the USA-Asia Council Foreign Policy Partnership as an independent, non-partisan institution.',
    deliberations: 'Founding leadership articulated the Council\'s non-partisan mission: to promote diplomatic dialogue, foster bilateral trade, empower youth voices in foreign policy, and strengthen strategic ties between the United States and the nations of Asia.',
    takeaways: [
      'Unveiling of the Council\'s official seal featuring the American eagle, Asian sunrise, and symbols of diplomacy and peace.',
      'Ratification of the Council\'s non-partisan governance charter and ethical research standards.',
      'Announcement of initial research endowments supporting South Asia and East Asia policy desks.',
      'Public release of the Council\'s inaugural policy manifesto: "Bridging People, Building Partnerships, Shaping a Stronger Future."'
    ],
    quote: 'With this charter and seal, we dedicate ourselves to the noble work of peace, understanding, and enduring partnership between the United States and the nations of Asia.'
  }
];

// Helper to generate an event subpage HTML with 100% complete, uncropped photo frames
function generateEventHtml(evt) {
  return `<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${evt.title} | USA-ASIA Council Events</title>
    <!-- Google Fonts: Oswald, Inter & Merriweather -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Oswald:wght@600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="index.css">
</head>
<body>

    <!-- Header with USA-ASIA Council Official Logo -->
    <header class="council-site-header">
        <div class="council-header-inner">
            <a href="index.html" class="council-logo-link">
                <img src="assets/logo.png" alt="USA Asia Foreign Policy Partnership Council" class="council-nav-logo-img">
            </a>
            
            <nav class="council-nav-menu">
                <ul class="council-nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="us-pakistan-relationship.html">U.S. Pak Relationship</a></li>
                    <li><a href="us-saudi-arabia-relationship.html">U.S. Saudi Arabia Relationship</a></li>
                    <li><a href="issues.html">Our Missions</a></li>
                    <li><a href="events.html" class="active">Events</a></li>
                    <li><a href="support.html">Support</a></li>
                    <li><a href="about.html">Contact</a></li>
                </ul>
                <a href="donate.html" class="btn-council-donate-pill">Donate</a>
            </nav>
            <button class="council-mobile-toggle" aria-label="Toggle Navigation Menu">
                <i class="ph ph-list"></i>
            </button>
        </div>
    </header>

    <main class="section-padding" style="padding-top: 140px; background-color: var(--color-bg-offwhite); min-height: 80vh;">
        <article class="container" style="max-width: 960px; margin: 0 auto; padding: 0 24px;">
            
            <!-- Breadcrumbs / Kicker -->
            <div style="margin-bottom: 25px;">
                <a href="events.html" style="font-family:'Inter', sans-serif; font-size:13px; font-weight:700; color:#6b7280; text-decoration:none; display:inline-flex; align-items:center; gap:6px; margin-bottom:12px;">
                    <i class="ph ph-arrow-left"></i> ALL EVENTS
                </a>
                <br>
                <span style="display:inline-block; font-family:'Inter', sans-serif; font-size:12px; font-weight:800; letter-spacing:1.5px; color:#ffffff; background:#be1823; padding:6px 16px; border-radius:3px; text-transform:uppercase;">
                    ${evt.tag}
                </span>
            </div>

            <!-- Event Title -->
            <h1 style="font-family:'Oswald', sans-serif; font-size: 40px; font-weight: 700; color: var(--color-primary); text-transform: uppercase; line-height: 1.25; margin: 0 0 20px 0;">
                ${evt.title}
            </h1>
            <div class="section-divider" style="margin-left: 0; margin-bottom: 30px;"></div>

            <!-- Event Metadata Information Card -->
            <div style="background-color: #ffffff; border-left: 4px solid #23a0ee; border-radius: 6px; padding: 24px 28px; margin-bottom: 40px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                <div>
                    <span style="font-family:'Inter',sans-serif; font-size:11px; font-weight:800; color:#6b7280; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:4px;">Date & Time</span>
                    <strong style="font-family:'Inter',sans-serif; font-size:14px; color:#0c2340;">${evt.date}</strong><br>
                    <span style="font-family:'Inter',sans-serif; font-size:13px; color:#4b5563;">${evt.time}</span>
                </div>
                <div>
                    <span style="font-family:'Inter',sans-serif; font-size:11px; font-weight:800; color:#6b7280; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:4px;">Location / Venue</span>
                    <strong style="font-family:'Inter',sans-serif; font-size:14px; color:#0c2340;">${evt.venue}</strong>
                </div>
                <div>
                    <span style="font-family:'Inter',sans-serif; font-size:11px; font-weight:800; color:#6b7280; text-transform:uppercase; letter-spacing:1px; display:block; margin-bottom:4px;">Featured Participants</span>
                    <span style="font-family:'Inter',sans-serif; font-size:13px; color:#1f2937; line-height:1.4;">${evt.speakers}</span>
                </div>
            </div>

            <!-- Primary High-Resolution Real Hero Image (Complete, Uncropped Display) -->
            <figure style="margin: 0 0 40px 0; background: #08162b; border-radius: 8px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.12); display: flex; flex-direction: column;">
                <div class="event-primary-hero-frame" style="width: 100%; height: 500px; display: flex; align-items: center; justify-content: center; background: #08162b; padding: 12px;">
                    <img src="${evt.primaryImg}" alt="${evt.primaryAlt}" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; border-radius: 4px;">
                </div>
                <figcaption style="font-family:'Inter', sans-serif; font-size: 13px; color: #cbd5e1; padding: 12px 20px; background: #0c2340; border-top: 1px solid rgba(255,255,255,0.08); font-style: italic;">
                    ${evt.primaryAlt}
                </figcaption>
            </figure>

            <!-- Executive Overview Section -->
            <section style="font-size: 18px; line-height: 1.8; color: var(--color-text-main); margin-bottom: 35px;">
                <h2 style="font-family:'Oswald',sans-serif; font-size: 26px; color: var(--color-primary); text-transform: uppercase; margin-bottom: 15px;">Executive Overview</h2>
                <p style="margin-bottom: 25px;">${evt.overview}</p>
            </section>

            <!-- Detailed Deliberation Section -->
            <section style="font-size: 17px; line-height: 1.8; color: #2d3748; margin-bottom: 40px;">
                <h2 style="font-family:'Oswald',sans-serif; font-size: 26px; color: var(--color-primary); text-transform: uppercase; margin-bottom: 15px;">Key Deliberations & Strategic Outcomes</h2>
                <p style="margin-bottom: 22px;">${evt.deliberations}</p>
            </section>

            <!-- 2-Column Photo Gallery (Complete, Uncropped Display - No Cut Faces) -->
            <div class="event-gallery-grid" style="display: grid; gap: 24px; margin-bottom: 45px;">
                <figure style="margin: 0; background: #08162b; border-radius: 8px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.08); display: flex; flex-direction: column;">
                    <div class="event-gallery-frame" style="width: 100%; height: 380px; display: flex; align-items: center; justify-content: center; background: #08162b; padding: 10px;">
                        <img src="${evt.gallery1}" alt="${evt.gallery1Alt}" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; border-radius: 4px;">
                    </div>
                    <figcaption style="font-family:'Inter', sans-serif; font-size: 12px; color: #cbd5e1; padding: 12px 16px; background: #0c2340; border-top: 1px solid rgba(255,255,255,0.08); line-height: 1.4;">
                        ${evt.gallery1Alt}
                    </figcaption>
                </figure>
                <figure style="margin: 0; background: #08162b; border-radius: 8px; overflow: hidden; box-shadow: 0 6px 18px rgba(0,0,0,0.08); display: flex; flex-direction: column;">
                    <div class="event-gallery-frame" style="width: 100%; height: 380px; display: flex; align-items: center; justify-content: center; background: #08162b; padding: 10px;">
                        <img src="${evt.gallery2}" alt="${evt.gallery2Alt}" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; border-radius: 4px;">
                    </div>
                    <figcaption style="font-family:'Inter', sans-serif; font-size: 12px; color: #cbd5e1; padding: 12px 16px; background: #0c2340; border-top: 1px solid rgba(255,255,255,0.08); line-height: 1.4;">
                        ${evt.gallery2Alt}
                    </figcaption>
                </figure>
            </div>

            <!-- Key Takeaways & Recommendations -->
            <section style="background-color: #ffffff; border-radius: 8px; padding: 35px 36px; margin-bottom: 40px; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
                <h2 style="font-family:'Oswald',sans-serif; font-size: 24px; color: var(--color-primary); text-transform: uppercase; margin-bottom: 20px;">
                    Strategic Policy Takeaways
                </h2>
                <ul style="font-family:'Inter',sans-serif; font-size: 16px; line-height: 1.7; color: #374151; padding-left: 20px; margin: 0;">
                    ${evt.takeaways.map(t => `<li style="margin-bottom: 12px;">${t}</li>`).join('')}
                </ul>
            </section>

            <!-- Official Quote / Communiqué Callout -->
            <blockquote style="background-color: #0c2340; color: #ffffff; border-left: 6px solid #23a0ee; border-radius: 4px; padding: 30px 32px; font-family:'Merriweather',serif; font-size: 17px; font-style: italic; line-height: 1.75; margin: 0 0 50px 0; box-shadow: 0 8px 24px rgba(12,35,64,0.15);">
                "${evt.quote}" — USA-ASIA Council Diplomatic Assembly
            </blockquote>

            <!-- Back to Events Navigation Button -->
            <div style="text-align: center; margin: 50px 0 30px 0;">
                <a href="events.html" class="fp-view-all-issues-btn">
                    <i class="ph ph-arrow-left"></i> BACK TO ALL EVENTS
                </a>
            </div>

        </article>
    </main>

    <!-- Standard Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo-container footer-logo">
                        <div class="logo-top">USA-ASIA COUNCIL</div>
                        <div class="logo-bottom">
                            <div class="logo-bottom-text">FOREIGN POLICY</div>
                            <div class="logo-red-line"></div>
                        </div>
                    </div>
                    <p class="footer-desc">A non-partisan think-tank dedicated to strengthening the strategic, economic, and diplomatic ties between the United States and the nations of Asia.</p>
                    <p>
                        USA-ASIA Council<br>
                        Washington, DC<br>
                        <a href="mailto:info@usaasiacouncil.org" style="color: var(--color-accent-gold);">info@usaasiacouncil.org</a>
                    </p>
                </div>
                
                <div class="footer-col">
                    <h4 class="footer-heading">Initiatives</h4>
                    <ul class="footer-links">
                        <li><a href="intermestic.html">Intermestic Policy</a></li>
                        <li><a href="nextgen.html">NextGen Leaders</a></li>
                        <li><a href="briefs.html">Policy Briefs</a></li>
                        <li><a href="events.html">Global Summits</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4 class="footer-heading">Organization</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="leadership.html">Leadership</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="donate.html">Donate</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4 class="footer-heading">Stay Informed</h4>
                    <p style="margin-bottom: 15px;">Subscribe to our newsletter for the latest diplomatic briefs and summit invitations.</p>
                    <form class="newsletter-form">
                        <input type="email" class="newsletter-input" placeholder="Email Address" required>
                        <button type="submit" class="newsletter-btn">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2026 USA-ASIA Council Foreign Policy Partnership. All Rights Reserved.</p>
                <div class="footer-bottom-links">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    <script src="script.js"></script>
</body>
</html>`;
}

// Generate all 25 event subpages
eventsData.forEach(evt => {
  const filePath = path.join('c:/USA', evt.slug + '.html');
  fs.writeFileSync(filePath, generateEventHtml(evt), 'utf8');
});
console.log('Successfully generated all ' + eventsData.length + ' event subpages.');

// Generate events.html with exact background-position and uncropped hero
const eventsPageHtml = `<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Events Hub | USA-ASIA Council Foreign Policy Partnership</title>
    <!-- Google Fonts: Oswald, Inter & Merriweather -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&family=Merriweather:wght@300;400;700;900&family=Oswald:wght@600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
    <link rel="stylesheet" href="index.css">
    <style>
        .event-filter-pill-btn {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            padding: 8px 16px;
            border-radius: 4px;
            border: 1px solid #cbd5e1;
            background: #ffffff;
            color: #475569;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .event-filter-pill-btn:hover {
            border-color: #be1823;
            color: #be1823;
        }
        .event-filter-pill-btn.active {
            background: #be1823;
            border-color: #be1823;
            color: #ffffff;
        }
    </style>
</head>
<body>

    <!-- Header with USA-ASIA Council Official Logo -->
    <header class="council-site-header">
        <div class="council-header-inner">
            <a href="index.html" class="council-logo-link">
                <img src="assets/logo.png" alt="USA Asia Foreign Policy Partnership Council" class="council-nav-logo-img">
            </a>
            
            <nav class="council-nav-menu">
                <ul class="council-nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="us-pakistan-relationship.html">U.S. Pak Relationship</a></li>
                    <li><a href="us-saudi-arabia-relationship.html">U.S. Saudi Arabia Relationship</a></li>
                    <li><a href="issues.html">Our Missions</a></li>
                    <li><a href="events.html" class="active">Events</a></li>
                    <li><a href="support.html">Support</a></li>
                    <li><a href="about.html">Contact</a></li>
                </ul>
                <a href="donate.html" class="btn-council-donate-pill">Donate</a>
            </nav>
            <button class="council-mobile-toggle" aria-label="Toggle Navigation Menu">
                <i class="ph ph-list"></i>
            </button>
        </div>
    </header>

    <main>
        <!-- Hero Section: JOIN US Badge, Giant Cyan EVENTS Title, Subnav Tabs & Flagship Forum Banner -->
        <section class="events-hero-section">
            <div class="events-hero-container">
                <!-- Left: Badge, Giant Title, Tabs -->
                <div class="events-hero-left">
                    <span style="display:inline-block; font-family:'Inter', sans-serif; font-size:12px; font-weight:800; letter-spacing:1.5px; color:#ffffff; background:#be1823; padding:6px 18px; border-radius:2px; margin-bottom:20px; text-transform:uppercase; width:fit-content;">JOIN US</span>
                    <h1 class="events-giant-title">EVENTS</h1>
                    <div class="events-hero-tabs">
                        <a href="#upcoming-events" class="events-tab-link">UPCOMING</a>
                        <a href="#previous-events" class="events-tab-link active">PREVIOUS</a>
                    </div>
                </div>

                <!-- Right: High Resolution Flagship Annual Meeting Banner Photo (Complete, Uncropped) -->
                <div class="events-hero-right">
                    <div class="events-hero-img-frame" style="height: 440px; background: #08162b; display: flex; align-items: center; justify-content: center; padding: 10px; border-radius: 6px; box-shadow: 0 15px 35px rgba(12, 35, 64, 0.12);">
                        <img src="assets/events/council-first-annual-meeting-2026.jpg" alt="USA-Asia Foreign Policy Council First Annual Meeting 2026" class="events-hero-img" style="max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; display: block; border-radius: 4px;">
                    </div>
                </div>
            </div>
        </section>

        <!-- UPCOMING EVENTS Section (Cleared for now as instructed) -->
        <section class="events-section" id="upcoming-events">
            <div class="events-section-header">
                <div class="events-red-bar"></div>
                <h2 class="events-section-title">UPCOMING EVENTS</h2>
            </div>

            <div style="max-width: 1240px; margin: 0 auto; padding: 48px 24px; text-align: center; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px; box-shadow: 0 4px 14px rgba(15,23,42,0.04);">
                <div style="width: 56px; height: 56px; margin: 0 auto 16px; border-radius: 50%; background: #fef2f2; display: flex; align-items: center; justify-content: center; color: #be1823; font-size: 26px;">
                    <i class="ph ph-calendar-blank"></i>
                </div>
                <h3 style="font-family: 'Oswald', sans-serif; font-size: 22px; color: #0f172a; letter-spacing: 0.5px; margin-bottom: 10px; text-transform: uppercase;">Upcoming Calendar Finalization in Progress</h3>
                <p style="font-family: 'Inter', sans-serif; font-size: 15px; color: #64748b; max-width: 680px; margin: 0 auto 20px; line-height: 1.6;">The USA-Asia Council Foreign Policy Partnership is actively coordinating high-level congressional delegations, embassy briefings, and youth leadership initiatives for the forthcoming cycle. Detailed schedules and registration portals will be announced here shortly.</p>
                <a href="#previous-events" style="display: inline-block; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 700; color: #be1823; text-decoration: none; border: 1px solid #be1823; padding: 10px 24px; border-radius: 4px; transition: all 0.2s ease;">EXPLORE COMPLETED DIPLOMATIC ENGAGEMENTS &darr;</a>
            </div>
        </section>

        <!-- PREVIOUS EVENTS Section (All 25 Distinct Event Images Organized Thematically) -->
        <section class="events-section events-previous-bg" id="previous-events">
            <div class="events-section-header">
                <div class="events-red-bar"></div>
                <h2 class="events-section-title">PREVIOUS EVENTS & ENGAGEMENTS</h2>
            </div>

            <!-- Thematic Filter Bar -->
            <div style="max-width: 1240px; margin: 0 auto 30px auto; padding: 0 24px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                <button type="button" class="event-filter-pill-btn active" data-filter="all">ALL ENGAGEMENTS (25)</button>
                <button type="button" class="event-filter-pill-btn" data-filter="congressional">CAPITOL HILL & CONGRESS (10)</button>
                <button type="button" class="event-filter-pill-btn" data-filter="un">UNITED NATIONS & MULTILATERAL (4)</button>
                <button type="button" class="event-filter-pill-btn" data-filter="diplomatic">BILATERAL DIPLOMACY & EMBASSIES (3)</button>
                <button type="button" class="event-filter-pill-btn" data-filter="academic">ACADEMIC & THINK TANKS (5)</button>
                <button type="button" class="event-filter-pill-btn" data-filter="council">COUNCIL & COMMUNITY (3)</button>
            </div>

            <div class="events-tiles-grid" id="events-grid">
                ${eventsData.map(evt => `
                <!-- Event Card: ${evt.title} -->
                <a href="${evt.slug}.html" class="event-tile-card" data-category="${evt.filter}">
                    <div class="event-tile-bg" style="background-image: url('${evt.primaryImg}'); background-position: ${evt.bgPos};"></div>
                    <div class="event-tile-overlay"></div>
                    <div class="event-tile-content">
                        <span class="event-tile-tag">${evt.tag}</span>
                        <h3 class="event-tile-title">${evt.title}</h3>
                    </div>
                    <span class="event-tile-plus">
                        <svg class="plus-circle-svg" viewBox="0 0 32 32" fill="none">
                            <circle cx="16" cy="16" r="14" stroke="currentColor" stroke-width="2.2"/>
                            <path d="M16 10V22M10 16H22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                        </svg>
                    </span>
                </a>`).join('\n')}
            </div>
        </section>
    </main>

    <!-- Council Standard Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <div class="logo-container footer-logo">
                        <div class="logo-top">USA-ASIA COUNCIL</div>
                        <div class="logo-bottom">
                            <div class="logo-bottom-text">FOREIGN POLICY</div>
                            <div class="logo-red-line"></div>
                        </div>
                    </div>
                    <p class="footer-desc">A non-partisan think-tank dedicated to strengthening the strategic, economic, and diplomatic ties between the United States and the nations of Asia.</p>
                    <p>
                        USA-ASIA Council<br>
                        Washington, DC<br>
                        <a href="mailto:info@usaasiacouncil.org" style="color: var(--color-accent-gold);">info@usaasiacouncil.org</a>
                    </p>
                </div>
                
                <div class="footer-col">
                    <h4 class="footer-heading">Initiatives</h4>
                    <ul class="footer-links">
                        <li><a href="intermestic.html">Intermestic Policy</a></li>
                        <li><a href="nextgen.html">NextGen Leaders</a></li>
                        <li><a href="briefs.html">Policy Briefs</a></li>
                        <li><a href="events.html">Global Summits</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4 class="footer-heading">Organization</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="leadership.html">Leadership</a></li>
                        <li><a href="careers.html">Careers</a></li>
                        <li><a href="donate.html">Donate</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4 class="footer-heading">Stay Informed</h4>
                    <p style="margin-bottom: 15px;">Subscribe to our newsletter for the latest diplomatic briefs and summit invitations.</p>
                    <form class="newsletter-form">
                        <input type="email" class="newsletter-input" placeholder="Email Address" required>
                        <button type="submit" class="newsletter-btn">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2026 USA-ASIA Council Foreign Policy Partnership. All Rights Reserved.</p>
                <div class="footer-bottom-links">
                    <a href="privacy.html">Privacy Policy</a>
                    <a href="terms.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Interactive Scripts: Tab Switching & Category Filter -->
    <script>
        // Hero Tab links
        document.querySelectorAll('.events-tab-link').forEach(link => {
            link.addEventListener('click', function(e) {
                document.querySelectorAll('.events-tab-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Thematic Filter Buttons
        const filterBtns = document.querySelectorAll('.event-filter-pill-btn');
        const eventCards = document.querySelectorAll('.event-tile-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const targetFilter = this.getAttribute('data-filter');

                eventCards.forEach(card => {
                    const cardCat = card.getAttribute('data-category');
                    if (targetFilter === 'all' || cardCat === targetFilter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    </script>
    <script src="script.js"></script>
</body>
</html>`;

fs.writeFileSync('c:/USA/events.html', eventsPageHtml, 'utf8');
console.log('Successfully updated c:/USA/events.html and all 25 subpages with zero face-cropping.');

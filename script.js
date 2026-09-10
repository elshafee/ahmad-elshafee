/**
 * Eng. Ahmad Elshafee — Professional Portfolio Interactive Logic
 * Features: Bilingual (EN/AR), Dark/Light Mode, Project Filters, Case Study Modal, Copy Tools
 */

// ==========================================================================
// 1. BILINGUAL DICTIONARY (English & Arabic)
// ==========================================================================
const translations = {
  en: {
    "nav.role": "Robotics & AI Engineer",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.achievements": "Honors",
    "nav.contact": "Contact",
    "nav.cv": "Resume",

    "hero.status": "Available for Freelance & Robotics Research",
    "hero.greeting": "Hello, I'm",
    "hero.imA": "I engineer",
    "hero.summary": "Mechatronics Engineer and AI-driven medical robotics researcher. I bridge intelligent hardware, embedded IoT systems, and clinical deep learning to engineer healthcare solutions that save lives.",
    "hero.viewProjects": "Explore Projects",
    "hero.contactMe": "Get In Touch",
    "hero.downloadCV": "Download CV",

    "metrics.experience": "Years Engineering",
    "metrics.accuracy": "Clinical Trial Accuracy",
    "metrics.google": "Google Global Challenge",
    "metrics.systems": "IoT & AI Systems",

    "about.tag": "Discovery & Story",
    "about.title": "About Eng. Ahmad Elshafee",
    "about.headline": "Engineering Intelligent Systems that Merge Mechatronics with Deep Learning",
    "about.para1": "I am a Mechatronics Engineer and AI-driven robotics researcher currently pursuing my Master’s Degree in Medical Robotics & AI in Healthcare at Mansoura University. With a B.Sc. in Mechatronics Engineering from Horus University (Class of 2023, GPA 3.15), my career has centered on solving high-stakes challenges where hardware precision meets intelligent algorithmic computation.",
    "about.para2": "My engineering philosophy revolves around translating complex theoretical science into tangible, deployable technology. As the lead innovator behind Dr. HEMA—an AI-powered diagnostic robot validated with >90% diagnostic accuracy in clinical evaluations—I have demonstrated how embedded IoT telematics and predictive machine learning can expand healthcare access to underserved communities.",
    "about.para3": "Beyond robotics, I have held leadership roles across borders: from managing large-scale industrial operations and multi-million pound infrastructure during military service, to serving as Vice Head of Development for Saudi Arabia's national HudHud initiative, to directing international technology summits like Tunisia AI Hack with the Tunisian Ministry of Industry.",
    "about.locationTitle": "Location",
    "about.locationDesc": "Talkha, Dakahlia, Egypt (Global Remote)",
    "about.degreeTitle": "Academic Focus",
    "about.degreeDesc": "M.Sc. Medical Robotics & AI (Mansoura Univ)",
    "about.accreditationTitle": "Key Recognition",
    "about.accreditationDesc": "Top 50 Worldwide (Google Solution Challenge)",
    "about.roleTitle": "Leadership",
    "about.roleDesc": "Ex-Vice Head of Dev (HudHud KSA) & Ex-GDSC Lead",

    "usp.cardTitle": "My Core Value Proposition",
    "usp.enMain": "\"I help healthcare organizations and technology innovators bridge intelligent hardware and clinical AI to deploy life-saving medical robotics and embedded IoT systems with high-reliability performance.\"",
    "usp.enPunchy": "\"Engineering intelligent healthcare—from custom embedded IoT to clinical AI diagnostics that save lives.\"",
    "usp.arMain": "\"أساعد المؤسسات الصحية والشركات التكنولوجية الناشئة على تحويل الرؤى الهندسية إلى روبوتات طبية وأنظمة ذكاء اصطناعي تشخيصية معتمدة، عبر دمج النظم المدمجة بخوارزميات التعلم الآلي فائقة الدقة.\"",
    "usp.arPunchy": "\"أبتكر حلول الرعاية الصحية الذكية — من الدوائر المدمجة وأجهزة الـ IoT إلى روبوتات التشخيص الطبي بالذكاء الاصطناعي.\"",
    "usp.pillar1": "Hardware Mastery",
    "usp.pillar2": "Clinical AI & Vision",
    "usp.pillar3": ">90% Validated Efficacy",

    "services.tag": "Freelance & Consulting",
    "services.title": "Specialized Engineering Services",
    "services.lead": "Delivering high-value, end-to-end solutions from hardware prototyping to production-grade AI algorithms.",
    "services.featured": "Featured",

    "service1.title": "Medical Robotics & Diagnostic Prototyping",
    "service1.desc": "End-to-end design, mechanical kinematic modeling, sensor integration, and algorithmic diagnostics for healthcare robotics, vital signs screening devices, and clinical assistance platforms.",
    "service1.f1": "Biomedical sensor integration (PPG, ECG, IR, SpO2)",
    "service1.f2": "SolidWorks 3D chassis & kinematic simulation",
    "service1.f3": "Autonomous navigation & patient interaction",

    "service2.title": "AI, Computer Vision & Clinical ML",
    "service2.desc": "Architecting state-of-the-art predictive models, convolutional neural networks for medical imaging, and RAG architectures for cardiology and clinical decision support.",
    "service2.f1": "TensorFlow & PyTorch custom pipelines",
    "service2.f2": "Clinical RAG systems & Hallucination mitigation",
    "service2.f3": "Computer vision & biomedical anomaly detection",

    "service3.title": "Embedded Systems & IoT Firmware",
    "service3.desc": "Firmware engineering for ESP32, ESP8266, STM32, and Arduino boards. Building real-time telemetry, RFID access control, and low-latency cloud synchronization.",
    "service3.f1": "Custom C/C++ firmware & RTOS integration",
    "service3.f2": "I2C, SPI, UART, MQTT & BLE protocols",
    "service3.f3": "Smart campus telematics & GPS bus tracking",

    "service4.title": "Full-Stack & Cross-Platform Mobile Apps",
    "service4.desc": "Building intuitive mobile and web frontends that connect seamlessly to embedded hardware, telemetry databases, and cloud microservices.",
    "service4.f1": "Flutter & Native Android (Kotlin) applications",
    "service4.f2": "Python Flask / FastAPI microservices & Supabase",
    "service4.f3": "Real-time dashboards & telemetry analytics",

    "service5.title": "Technical Consulting & Project Delivery",
    "service5.desc": "Leveraging Google Project Management certification and military factory operations experience to lead technical teams, streamline sprints, and ensure timely product delivery.",
    "service5.f1": "Hardware-software architecture design",
    "service5.f2": "Cross-functional team sprint leadership",
    "service5.f3": "Production line workflow optimization",

    "projects.tag": "Showcase & Case Studies",
    "projects.title": "Flagship Engineering Projects",
    "projects.lead": "Rigorous engineering solutions with proven clinical trials, international awards, and enterprise scale.",
    "projects.viewCaseStudy": "Read Full Case Study",

    "filter.all": "All Projects",
    "filter.robotics": "Medical Robotics",
    "filter.ai": "AI & ML",
    "filter.iot": "IoT & Embedded",
    "filter.software": "Enterprise Software",

    "category.medicalRobotics": "Medical Robotics & AI",
    "category.iotCampus": "IoT & Smart Infrastructure",
    "category.biomedicalIoT": "Biomedical IoT Device",
    "category.aiResearch": "Clinical AI Research",
    "category.enterprise": "Enterprise Platform (KSA)",
    "category.fullstack": "Full-Stack Cloud App",

    "proj1.title": "Dr. HEMA – AI-Powered Medical Diagnostic Robot",
    "proj1.summary": "A multidisciplinary machine learning healthcare robot engineered to provide vital signs collection, blood glucose analysis, and preliminary disease diagnosis in underserved rural areas.",
    "proj2.title": "Smart University & Transit Telemetry System",
    "proj2.summary": "End-to-end IoT platform deploying ESP boards across campus transit buses for live GPS telematics, paired with an RFID cashless payment network and mobile student companion.",
    "proj3.title": "Smart Hand Sanitizer & Health Telemetry Kiosk",
    "proj3.summary": "ESP32-driven health monitoring kiosk with 7-inch TFT display, integrating MAX30102 pulse oximeter, MLX90614 infrared contactless thermometer, and RFID attendance verification.",
    "proj4.title": "Taxonomic RAG Architecture for Cardiology Support",
    "proj4.summary": "Pioneering academic research treating LLM medical hallucinations analogous to network security intrusions, deploying an intrusion detection taxonomy for cardiology diagnostics.",
    "proj5.title": "HudHud National Software Initiative",
    "proj5.summary": "Led cross-functional software teams, architected microservices, and aligned multiple engineering disciplines to streamline product delivery for the national HudHud initiative in Saudi Arabia.",
    "proj6.title": "Essic Enterprise Document Intelligence System",
    "proj6.summary": "High-security institutional document numbering, verification, and automated cloud sync system built with Flask, Supabase PostgreSQL, and automated OneDrive integration.",

    "exp.tag": "Career Journey",
    "exp.title": "Professional Work Experience",
    "exp1.role": "Factory Complex Manager & Project Manager",
    "exp1.company": "Military Service",
    "exp1.summary": "Directed large-scale industrial operations and led critical engineering projects within a complex, high-stakes production environment.",
    "exp1.b1": "Optimized daily production workflows and instituted rigorous quality assurance standards.",
    "exp1.b2": "Managed cross-functional technical teams to deliver infrastructure and facility upgrades ahead of schedule.",
    "exp1.b3": "Mitigated supply chain constraints through agile resource allocation and preventive maintenance protocols.",

    "exp2.role": "Vice Head of Development & Software Engineer",
    "exp2.company": "HudHud Project (Saudi Arabia)",
    "exp2.summary": "Spearheaded cross-functional development teams for Saudi Arabia's national HudHud initiative, aligning frontend, backend, and QA streams.",
    "exp2.b1": "Promoted to Vice Head of Development in March 2024 after streamlining the software delivery lifecycle.",
    "exp2.b2": "Architected robust microservices and API integrations to accommodate high-concurrency traffic.",
    "exp2.b3": "Collaborated with stakeholders to convert strategic vision into executable technical sprints.",

    "exp3.role": "Expert Trainer & Technical Project Manager",
    "exp3.company": "BambooGeeks",
    "exp3.summary": "Directed mega international technical initiatives, managed educational developer academies, and represented technology partners globally.",
    "exp3.b1": "Tunisia AI Hack: Traveled to Tunisia in official cooperation with the Tunisian Ministry of Industry to manage and execute one of Africa’s largest AI hackathons.",
    "exp3.b2": "LEAP 2024 (Saudi Arabia): Remotely organized and coordinated technical workflows for LEAP 2024 with international stakeholders.",
    "exp3.b3": "Developer Academies: Managed Flutter and Android Academies, mentoring over 150+ students in production-grade software development.",

    "exp4.role": "Founder, Community Leader & Technical Mentor",
    "exp4.company": "GDSC, IEEE & GDG",
    "exp4.summary": "Founded and directed technology communities, empowering thousands of aspiring engineers across Egyptian universities.",
    "exp4.b1": "Founder & Leader: Google Developer Student Clubs (GDSC) Horus University (Jul 2021 – Aug 2022).",
    "exp4.b2": "Assistant Head: IEEE Horus University Student Branch (Nov 2021 – Oct 2023).",
    "exp4.b3": "Mentor: Google Developer Groups (GDG) (Aug 2022 – May 2024).",
    "exp4.b4": "Campus Ambassador: Huawei ICT Horus University (Aug 2021 – Jul 2022).",

    "edu.tag": "Academic Foundation & Credentials",
    "edu.title": "Education & Certifications",
    "edu1.degree": "Master’s Degree in Medical Robotics & AI in Healthcare",
    "edu1.institution": "Mansoura University, Egypt",
    "edu1.desc": "Advanced research thesis focusing on AI diagnostic decision support, clinical RAG architectures, and autonomous robotic interventions for cardiology and vital screening.",
    "edu2.degree": "Bachelor of Science in Mechatronics Engineering",
    "edu2.institution": "Horus University, Egypt",
    "edu2.desc": "Graduation Project: Dr. HEMA – Medical Diagnostic Robot (Awarded Highest Honors & 1st Place PSED Engineering Challenge).",
    "certs.title": "Professional Certifications & Accreditations",

    "skills.tag": "Core Competencies",
    "skills.title": "Technical Skills & Tooling",
    "skills.cat1": "Embedded Systems & Hardware",
    "skills.cat2": "AI, Machine Learning & Robotics",
    "skills.cat3": "Software & Mobile Engineering",
    "skills.cat4": "Engineering Management & Operations",

    "achieve.tag": "Honors & Accolades",
    "achieve.title": "Awards & Exhibitions",
    "ach1.title": "Google Solution Challenge — Top 50 Globally & 3rd Place MENA",
    "ach1.desc": "Recognized out of thousands of university engineering submissions worldwide by Google for developing scalable, high-impact healthcare technology.",
    "ach2.title": "1st Place Winner — PSED Engineering Challenge",
    "ach2.desc": "Awarded 1st place for the engineering, integration, and clinical presentation of the Dr. HEMA, EV-ion, and Dr. DERMA robotics and software platforms.",
    "ach3.title": "Exhibitor at Egyptian Air Defense Academy & MTC Science Fair",
    "ach3.desc": "Selected to present the Dr. HEMA medical diagnostic robot and smart health monitor before military and defense engineering leaders at the Annual Science Fair of the Military Technical College.",
    "ach4.title": "Author on ResearchGate & ITC-Egypt 2026",
    "ach4.desc": "Published: \"HEMA: A Proposed Robot for Improving Healthcare Access in Underserved Communities\" & co-author on cardiology hallucination detection RAG architecture.",

    "test.tag": "Client & Partner Endorsements",
    "test.title": "What Collaborators Say",
    "test1.quote": "\"Ahmad's ability to orchestrate both the physical embedded electronics and complex machine learning algorithms is extraordinary. His leadership on the Dr. HEMA robot project delivered clinical accuracy that exceeded all faculty expectations.\"",
    "test1.author": "Faculty Advisory Board",
    "test1.role": "Horus & Mansoura University Robotics Labs",
    "test2.quote": "\"Managing the Tunisia AI Hack alongside the Tunisian Ministry of Industry required flawless logistics and technical expertise. Ahmad delivered exceptional event leadership, inspiring hundreds of data scientists and engineers.\"",
    "test2.author": "BambooGeeks Leadership",
    "test2.role": "International Technology Initiatives",
    "test3.quote": "\"As Vice Head of Development on our national project, Ahmad unified separate teams, established high coding standards, and rapidly unblocked critical bottlenecks under tight deadlines.\"",
    "test3.author": "HudHud Project Team",
    "test3.role": "Software Engineering Directorate, Saudi Arabia",

    "contact.tag": "Let's Build Something Revolutionary",
    "contact.title": "Get In Touch With Eng. Ahmad",
    "contact.lead": "Have a medical robotics project, an IoT embedded system, or an AI research challenge? Let's discuss how we can engineer a reliable, high-impact solution.",
    "contact.infoTitle": "Direct Channels",
    "contact.emailLabel": "Email Address",
    "contact.phoneLabel": "Phone & WhatsApp",
    "contact.locLabel": "Primary Location",
    "contact.locSub": "Available for worldwide remote collaboration & travel",
    "contact.copy": "Copy",

    "form.name": "Full Name *",
    "form.email": "Email Address *",
    "form.service": "Project Niche / Service Interest",
    "form.optRobotics": "Medical Robotics & Hardware Prototyping",
    "form.optAI": "Clinical AI, Computer Vision & RAG",
    "form.optIoT": "Embedded Systems & ESP32 IoT Devices",
    "form.optApp": "Full-Stack & Mobile Development (Flutter/Flask)",
    "form.optConsult": "Technical Project Consultation / Other",
    "form.message": "Project Description & Requirements *",
    "form.sendBtn": "Send Message to Eng. Ahmad",
    "form.privacy": "Direct mail dispatch. Responses usually within 24 hours.",

    "footer.tagline": "Medical Robotics • Embedded IoT • Clinical AI Systems",
    "footer.debiText": "Built in accordance with the Egypt Digital Pioneers Initiative (DEBI) Freelancing Track Portfolio Standard.",
    "footer.backToTop": "Back to Top"
  },

  ar: {
    "nav.role": "مهندس روبوتات وذكاء اصطناعي",
    "nav.about": "عن المهندس",
    "nav.services": "الخدمات",
    "nav.projects": "المشاريع",
    "nav.experience": "الخبرات",
    "nav.education": "التعليم",
    "nav.skills": "المهارات",
    "nav.achievements": "الإنجازات",
    "nav.contact": "تواصل معي",
    "nav.cv": "السيرة الذاتية",

    "hero.status": "متاح للعمل الحر والاستشارات وأبحاث الروبوتات",
    "hero.greeting": "مرحباً، أنا",
    "hero.imA": "أقوم بابتكار وتطوير",
    "hero.summary": "مهندس ميكاترونكس وباحث في الروبوتات الطبية والذكاء الاصطناعي. أجمع بين دقة الأنظمة المدمجة وأجهزة الـ IoT وخوارزميات التعلم العميق لابتكار حلول صحية ذكية تنقذ الأرواح.",
    "hero.viewProjects": "استكشف المشاريع",
    "hero.contactMe": "تواصل معي الآن",
    "hero.downloadCV": "تحميل السيرة الذاتية",

    "metrics.experience": "سنوات خبرة هندسية",
    "metrics.accuracy": "دقة التجارب الإكلينيكية",
    "metrics.google": "تحدي حلول جوجل العالمي",
    "metrics.systems": "نظام IoT وذكاء اصطناعي",

    "about.tag": "القصة والمسيرة",
    "about.title": "عن م. أحمد الشافعي",
    "about.headline": "هندسة الأنظمة الذكية التي تدمج الميكاترونكس بالتعلم العميق",
    "about.para1": "أنا مهندس ميكاترونكس وباحث في الروبوتات الطبية بالذكاء الاصطناعي، أتابع حالياً دراستي لدرجة الماجستير في «الروبوتات الطبية والذكاء الاصطناعي في الرعاية الصحية» بجامعة المنصورة. تخرجت من جامعة حورس في هندسة الميكاترونكس (دفعة 2023 بمعدل تراكمي 3.15)، وتمحورت مسيرتي حول مواجهة التحديات المعقدة التي تلتقي فيها دقة الهاردوير بذكاء الخوارزميات البرمجية.",
    "about.para2": "تعتمد فلسفتي الهندسية على تحويل الأبحاث النظرية إلى تقنيات ملموسة قابلة للنشر الفعلي. وبصفتي المبتكر الرئيسي للروبوت التشخيصي «Dr. HEMA»—الذي حقق دقة تشخيصية تجاوزت 90% في التجارب الإكلينيكية—أثبتُ كيف يمكن لأنظمة الـ IoT المدمجة ونماذج التعلم الآلي توفير الرعاية الصحية للمناطق المحرومة.",
    "about.para3": "إلى جانب الروبوتات، توليت أدواراً قيادية دولية ومحلية بارزة: من إدارة مجمع مصانع وإدارة مشاريع بنية تحتية هندسية أثناء الخدمة العسكرية، إلى شغل منصب «نائب رئيس قسم التطوير» في مشروع هدهد الوطني بالمملكة العربية السعودية، وصولاً إلى إدارة مؤتمرات تقنية كبرى مثل «Tunisia AI Hack» بالتعاون مع وزارة الصناعة التونسية.",
    "about.locationTitle": "الموقع",
    "about.locationDesc": "طلخا، الدقهلية، مصر (ومتاح للعمل عن بُعد دولياً)",
    "about.degreeTitle": "المسار الأكاديمي",
    "about.degreeDesc": "ماجستير الروبوتات الطبية والذكاء الاصطناعي (جامعة المنصورة)",
    "about.accreditationTitle": "أبرز تكريم",
    "about.accreditationDesc": "ضمن أفضل 50 عالمياً (تحدي حلول جوجل Google Solution Challenge)",
    "about.roleTitle": "الخبرة القيادية",
    "about.roleDesc": "نائب رئيس التطوير سابقاً (مشروع هدهد بالسعودية) ومؤسس GDSC",

    "usp.cardTitle": "عرض القيمة الفريد (USP)",
    "usp.enMain": "\"I help healthcare organizations and technology innovators bridge intelligent hardware and clinical AI to deploy life-saving medical robotics and embedded IoT systems with high-reliability performance.\"",
    "usp.enPunchy": "\"Engineering intelligent healthcare—from custom embedded IoT to clinical AI diagnostics that save lives.\"",
    "usp.arMain": "\"أساعد المؤسسات الصحية والشركات التكنولوجية الناشئة على تحويل الرؤى الهندسية إلى روبوتات طبية وأنظمة ذكاء اصطناعي تشخيصية معتمدة، عبر دمج النظم المدمجة بخوارزميات التعلم الآلي فائقة الدقة.\"",
    "usp.arPunchy": "\"أبتكر حلول الرعاية الصحية الذكية — من الدوائر المدمجة وأجهزة الـ IoT إلى روبوتات التشخيص الطبي بالذكاء الاصطناعي.\"",
    "usp.pillar1": "إتقان العتاد والأنظمة المدمجة",
    "usp.pillar2": "ذكاء سريري ورؤية حاسوبية",
    "usp.pillar3": "دقة معتمدة سريرياً >90%",

    "services.tag": "الخدمات والعمل الحر",
    "services.title": "الخدمات الهندسية والاستشارية المتخصصة",
    "services.lead": "تقديم حلول متكاملة وعالية القيمة تبدأ من النمذجة الأولية للهاردوير وحتى خوارزميات الذكاء الاصطناعي الجاهزة للإنتاج.",
    "services.featured": "الأكثر طلباً",

    "service1.title": "الروبوتات الطبية ونمذجة أجهزة التشخيص",
    "service1.desc": "تصميم كامل ومحاكاة حركية ودمج أجهزة الاستشعار الحيوية والخوارزميات التشخيصية للروبوتات الطبية وأجهزة قياس المؤشرات الحيوية.",
    "service1.f1": "دمج المستشعرات الطبية (PPG, ECG, IR, SpO2)",
    "service1.f2": "تصميم الهياكل والمحاكاة الحركية عبر SolidWorks",
    "service1.f3": "الملاحة الذكية والتفاعل الآمن مع المرضى",

    "service2.title": "الذكاء الاصطناعي والرؤية الحاسوبية الطبية",
    "service2.desc": "بناء نماذج التنبؤ بالتعلم العميق، والشبكات العصبية الالتفافية للصور الطبية، وهندسة أنظمة الـ RAG لدعم القرار في أمراض القلب.",
    "service2.f1": "خوارزميات مخصصة عبر TensorFlow و PyTorch",
    "service2.f2": "أنظمة RAG سريرية ومنع هلوسة النماذج اللغوية",
    "service2.f3": "رؤية حاسوبية واكتشاف الشذوذ في الإشارات الحيوية",

    "service3.title": "الأنظمة المدمجة وإنترنت الأشياء (IoT)",
    "service3.desc": "برمجة البرمجيات الثابتة (Firmware) لشرائح ESP32 و ESP8266 و STM32 و Arduino، مع أنظمة التتبع الفوري وبروتوكولات RFID.",
    "service3.f1": "برمجة مخصصة بلغة C/C++ وأنظمة RTOS",
    "service3.f2": "بروتوكولات I2C و SPI و UART و MQTT و BLE",
    "service3.f3": "أنظمة التتبع الفوري للحافلات الجامعية عبر GPS",

    "service4.title": "تطوير التطبيقات المحمولة ومنصات الويب",
    "service4.desc": "بناء واجهات تطبيقات ذكية متصلة بأجهزة الهاردوير وقواعد البيانات المباشرة والخدمات السحابية المصغرة.",
    "service4.f1": "تطبيقات Flutter وتطبيقات Android الأصلية (Kotlin)",
    "service4.f2": "خدمات Python Flask و FastAPI مع قواعد بيانات Supabase",
    "service4.f3": "لوحات تحكم لحظية وتحليلات القياس عن بُعد",

    "service5.title": "الاستشارات الهندسية وإدارة المشاريع التقنية",
    "service5.desc": "استثمار شهادة إدارة المشاريع الاحترافية من جوجل وخبرة إدارة مجمع المصانع العسكري لقيادة الفرق البرمجية وإنجاز المشاريع في مواعيدها.",
    "service5.f1": "تصميم المعمارية الهندسية المتكاملة للهاردوير والسوفتوير",
    "service5.f2": "قيادة الفرق التقنية وفق منهجيات Agile و Scrum",
    "service5.f3": "تحسين خطوط الإنتاج وسلاسل الإمداد الهندسي",

    "projects.tag": "معرض الأعمال ودراسات الحالة",
    "projects.title": "أبرز المشاريع الهندسية",
    "projects.lead": "حلول هندسية رصينة مدعومة بتجارب إكلينيكية حقيقية وجوائز دولية وأنظمة قيد الإنتاج.",
    "projects.viewCaseStudy": "قراءة دراسة الحالة كاملة",

    "filter.all": "كافة المشاريع",
    "filter.robotics": "الروبوتات الطبية",
    "filter.ai": "الذكاء الاصطناعي",
    "filter.iot": "إنترنت الأشياء",
    "filter.software": "البرمجيات السحابية",

    "category.medicalRobotics": "روبوتات طبية وذكاء اصطناعي",
    "category.iotCampus": "إنترنت الأشياء والبنية التحتية",
    "category.biomedicalIoT": "جهاز قياس حيوي ذكي",
    "category.aiResearch": "بحث سريري بالذكاء الاصطناعي",
    "category.enterprise": "منصة وطنية (السعودية)",
    "category.fullstack": "تطبيق ويب سحابي متكامل",

    "proj1.title": "Dr. HEMA – روبوت التشخيص الطبي الذكي",
    "proj1.summary": "روبوت رعاية صحية متعدد التخصصات يعمل بالتعلم الآلي لجمع المؤشرات الحيوية وتحليل نسبة السكر والضغط والتشخيص المبدئي للأمراض بالمناطق النائية.",
    "proj2.title": "منظومة الجامعة الذكية وتتبع الحافلات",
    "proj2.summary": "منصة IoT متكاملة لنشر شرائح ESP بالحافلات الجامعية للتتبع المباشر عبر GPS، مقترنة بنظام دفع إلكتروني غير تلامسي RFID وتطبيق طلابي ذكي.",
    "proj3.title": "جهاز التعقيم الذكي ورصد المؤشرات الحيوية",
    "proj3.summary": "كشك صحي يعمل بشريحة ESP32 وشاشة TFT مقاس 7 بوصات، مدمج بمستشعر MAX30102 للنبض والأكسجين، ومقياس حرارة بالأشعة تحت الحمراء MLX90614.",
    "proj4.title": "معمارية RAG تصنيفية لدعم قرارات أمراض القلب",
    "proj4.summary": "بحث علمي رائد يعامل الهلوسة الطبية لنماذج اللغة كاختراق أمني شبكي، مطبقاً تصنيف كشف التسلل لضمان موثوقية التشخيص في أمراض القلب.",
    "proj5.title": "مشروع هدهد الوطني للبرمجيات (السعودية)",
    "proj5.summary": "قيادة فرق التطوير متعددة التخصصات، وتصميم بنية الخدمات المصغرة، وتنسيق المسارات البرمجية لتسريع دورة تسليم البرمجيات بالمشروع الوطني السعودي.",
    "proj6.title": "منظومة Essic لإدارة وترقيم الوثائق السحابية",
    "proj6.summary": "نظام ترقيم وتوثيق مؤسسي فائق الأمان ومزامنة سحابية مؤتمتة تم بناؤه باستخدام Flask وقواعد بيانات Supabase والتكامل التلقائي مع OneDrive.",

    "exp.tag": "المسار المهني",
    "exp.title": "الخبرات المهنية والعملية",
    "exp1.role": "مدير مجمع مصانع ومدير مشاريع",
    "exp1.company": "الخدمة العسكرية",
    "exp1.summary": "إدارة عمليات صناعية ضخمة وقيادة مشاريع هندسية متقدمة في بيئة إنتاجية دقيقة وعالية الحساسية.",
    "exp1.b1": "تحسين مسارات العمل الإنتاجية اليومية وتطبيق معايير رقابة الجودة الصارمة.",
    "exp1.b2": "إدارة فرق هندسية متعددة التخصصات لتسليم منشآت وتجهيزات بنية تحتية قبل المواعيد المقررة.",
    "exp1.b3": "معالجة قيود سلاسل الإمداد من خلال التوزيع المرن للموارد وجداول الصيانة الوقائية.",

    "exp2.role": "نائب رئيس قسم التطوير ومهندس برمجيات",
    "exp2.company": "مشروع هدهد (المملكة العربية السعودية)",
    "exp2.summary": "قيادة فرق التطوير متعددة التخصصات لمبادرة هدهد الوطنية في السعودية وتنسيق مسارات الفرونت إند والباك إند وضمان الجودة.",
    "exp2.b1": "الترقية لمنصب نائب رئيس قسم التطوير في مارس 2024 بعد النجاح في توحيد الفرق وتسريع دورة تسليم البرمجيات.",
    "exp2.b2": "تصميم بنية الخدمات المصغرة والواجهات البرمجية للتعامل مع كثافة الاستخدام العالية.",
    "exp2.b3": "التعاون الوثيق مع القيادة الإدارية لتحويل الأهداف الاستراتيجية إلى مخرجات تقنية ملموسة.",

    "exp3.role": "مدرب خبير ومدير مشاريع تقنية",
    "exp3.company": "BambooGeeks",
    "exp3.summary": "إدارة فعاليات تقنية دولية كبرى، وإدارة الأكاديميات البرمجية، وتمثيل الشركاء التقنيين عالمياً.",
    "exp3.b1": "Tunisia AI Hack: السفر لتونس بالتعاون الرسمي مع وزارة الصناعة التونسية لإدارة وتنفيذ واحد من أضخم هاكاثونات الذكاء الاصطناعي في إفريقيا.",
    "exp3.b2": "مؤتمر LEAP 2024 (السعودية): تنظيم وتنسيق الجوانب التقنية للمؤتمر عن بُعد مع الأطراف الدولية المعنية.",
    "exp3.b3": "الأكاديميات التقنية: إدارة أكاديميات Flutter و Android وتدريب أكثر من 150 طالباً ومهندساً على بناء تطبيقات إنتاجية.",

    "exp4.role": "مؤسس وقائد مجتمعات تقنية ومدرب معتمد",
    "exp4.company": "نوادي مطوري جوجل GDSC و IEEE و GDG",
    "exp4.summary": "تأسيس وقيادة المجتمعات التكنولوجية وتمكين آلاف الطلاب والمهندسين بالجامعات المصرية.",
    "exp4.b1": "المؤسس والقائد: Google Developer Student Clubs (GDSC) بجامعة حورس (يوليو 2021 – أغسطس 2022).",
    "exp4.b2": "مساعد رئيس الفرع الطلابي: IEEE بجامعة حورس (نوفمبر 2021 – أكتوبر 2023).",
    "exp4.b3": "مرشد تقني (Mentor): Google Developer Groups (GDG) (أغسطس 2022 – مايو 2024).",
    "exp4.b4": "سفير تقني بالجامعة: Huawei ICT بجامعة حورس (أغسطس 2021 – يوليو 2022).",

    "edu.tag": "المؤهلات والاعتمادات الأكاديمية",
    "edu.title": "التعليم والشهادات الاحترافية",
    "edu1.degree": "درجة الماجستير في الروبوتات الطبية والذكاء الاصطناعي في الرعاية الصحية",
    "edu1.institution": "جامعة المنصورة، مصر",
    "edu1.desc": "أطروحة بحثية متقدمة تركز على دعم قرارات التشخيص بالذكاء الاصطناعي، ومعماريات الـ RAG السريرية، والتدخلات الروبوتية الذاتية في أمراض القلب والمؤشرات الحيوية.",
    "edu2.degree": "بكالوريوس هندسة الميكاترونكس",
    "edu2.institution": "جامعة حورس، مصر",
    "edu2.desc": "مشروع التخرج: روبوت التشخيص الطبي الذكي Dr. HEMA (حائز على الامتياز مع مرتبة الشرف والمركز الأول في تحدي PSED الهندسي).",
    "certs.title": "الشهادات المهنية والاعتمادات الدولية",

    "skills.tag": "الكفاءات والقدرات",
    "skills.title": "المهارات والترسانة التقنية",
    "skills.cat1": "الأنظمة المدمجة والعتاد الصلب",
    "skills.cat2": "الذكاء الاصطناعي والروبوتات",
    "skills.cat3": "تطوير البرمجيات والتطبيقات",
    "skills.cat4": "إدارة المشاريع والعمليات الهندسية",

    "achieve.tag": "الجوائز والتكريمات",
    "achieve.title": "الجوائز والمعارض الدولية",
    "ach1.title": "تحدي حلول جوجل — أفضل 50 مشروعاً عالمياً والمركز 3 بالشرق الأوسط",
    "ach1.desc": "تكريم من شركة Google العالمية من بين آلاف المشاريع الجامعية حول العالم لتطوير تكنولوجيا رعاية صحية قابلة للتوسع وعالية التأثير.",
    "ach2.title": "المركز الأول — تحدي PSED الهندسي",
    "ach2.desc": "الحصول على المركز الأول عن هندسة وتكامل وتقديم منصات روبوتات Dr. HEMA و EV-ion وبرمجيات Dr. DERMA الطبية.",
    "ach3.title": "عارض ومشارك في كلية الدفاع الجوي والمعرض العلمي للكلية الفنية العسكرية",
    "ach3.desc": "اختيار مشروعي Dr. HEMA وجهاز التعقيم الذكي للعرض أمام قادة الهندسة العسكرية والدفاعية بالمعرض العلمي السنوي للكلية الفنية العسكرية.",
    "ach4.title": "نشر بحثي في منصة ResearchGate ومؤتمر ITC-Egypt 2026",
    "ach4.desc": "نشر بحث: «HEMA: A Proposed Robot for Improving Healthcare Access in Underserved Communities» والمشاركة في ورقة كشف الهلوسة في أمراض القلب.",

    "test.tag": "آراء الشركاء والعملاء",
    "test.title": "ماذا يقول شركاء النجاح",
    "test1.quote": "\"إن قدرة المهندس أحمد على التوفيق بين دوائر الإلكترونيات المدمجة وخوارزميات التعلم الآلي المعقدة استثنائية للغاية. قيادته لمشروع روبوت Dr. HEMA حققت دقة سريرية فاقت كافة توقعات الأساتذة.\"",
    "test1.author": "هيئة الإشراف الأكاديمي",
    "test1.role": "معامل الروبوتات الطبية بجامعتي حورس والمنصورة",
    "test2.quote": "\"تطلبت إدارة هاكاثون تونس للذكاء الاصطناعي بالتعاون مع وزارة الصناعة التونسية تنسيقاً لوجستياً وتقنياً بالغ الدقة. قدم أحمد أداءً قيادياً ملهماً لمئات من مهندسي البيانات والباحثين.\"",
    "test2.author": "إدارة شركة BambooGeeks",
    "test2.role": "المبادرات التكنولوجية الدولية",
    "test3.quote": "\"بصفته نائباً لرئيس قسم التطوير في مشروعنا الوطني، وحّد أحمد جهود الفرق المختلفة، وفرض معايير برمجية رفيعة، وحل الاختناقات التقنية المعقدة في فترات قياسية.\"",
    "test3.author": "فريق مشروع هدهد الوطني",
    "test3.role": "إدارة هندسة البرمجيات، المملكة العربية السعودية",

    "contact.tag": "لنبتكر شيئاً ثورياً معاً",
    "contact.title": "تواصل مع المهندس أحمد الشافعي",
    "contact.lead": "هل لديك مشروع روبوتات طبية، أو نظام مدمج لإنترنت الأشياء، أو تحدٍ بحثي في الذكاء الاصطناعي؟ دعنا نتحدث لنبتكر حلاً هندسياً موثوقاً وعالي التأثير.",
    "contact.infoTitle": "قنوات التواصل المباشرة",
    "contact.emailLabel": "البريد الإلكتروني",
    "contact.phoneLabel": "الهاتف والواتساب",
    "contact.locLabel": "المقر الرئيسي",
    "contact.locSub": "متاح للتعاون الدولي عن بُعد والسفر حسب متطلبات المشروع",
    "contact.copy": "نسخ",

    "form.name": "الاسم بالكامل *",
    "form.email": "البريد الإلكتروني *",
    "form.service": "مجال المشروع / الخدمة المطلوبة",
    "form.optRobotics": "الروبوتات الطبية ونمذجة الهاردوير",
    "form.optAI": "الذكاء الاصطناعي السريري والرؤية وأنظمة RAG",
    "form.optIoT": "الأنظمة المدمجة وأجهزة إنترنت الأشياء ESP32",
    "form.optApp": "تطوير التطبيقات المحمولة والسحابية (Flutter/Flask)",
    "form.optConsult": "استشارات المشاريع الهندسية / أخرى",
    "form.message": "وصف المشروع والمتطلبات *",
    "form.sendBtn": "إرسال الرسالة إلى المهندس أحمد",
    "form.privacy": "إرسال مباشر عبر البريد. الرد عادة خلال 24 ساعة.",

    "footer.tagline": "روبوتات طبية • أنظمة إنترنت الأشياء المدمجة • ذكاء اصطناعي سريري",
    "footer.debiText": "تم إعداد هذا الملف وفقاً لمعايير مسار العمل الحر لمبادرة رواد مصر الرقمية (DEBI).",
    "footer.backToTop": "العودة للأعلى"
  }
};

// ==========================================================================
// 2. DETAILED CASE STUDIES DATA
// ==========================================================================
const caseStudiesData = {
  hema: {
    title: "Dr. HEMA – AI-Powered Medical Diagnostic Robot",
    titleAr: "Dr. HEMA – روبوت الفحص والتشخيص الطبي بالذكاء الاصطناعي",
    category: "Medical Robotics & Healthcare AI",
    categoryAr: "روبوتات طبية وذكاء اصطناعي",
    image: "assets/dr_hema.jpg",
    problem: "Millions of individuals living in rural and underserved communities lack immediate access to certified physicians and diagnostic centers, leading to delayed medical interventions and deteriorating chronic conditions.",
    problemAr: "يفتقر ملايين الأشخاص في المناطق الريفية والنائية إلى الفحص الطبي الفوري وندرة المراكز التشخيصية المتخصصة، مما يؤدي لتأخر اكتشاف الأمراض وتدهور الحالات المزمنة.",
    solution: "Engineered an autonomous medical assistant robot integrating biomedical telemetry sensors (vital signs, heart rate, blood pressure, blood glucose) with predictive machine learning algorithms. Designed a localized patient-friendly touchscreen interface operable by community health workers with minimal training.",
    solutionAr: "ابتكار روبوت فحص طبي ذاتي مزود بمستشعرات قياس المؤشرات الحيوية وضغط الدم ونسبة السكر، مدعوماً بخوارزميات تعلم آلي تشخيصية، مع واجهة لمسية سهلة الاستخدام تمكّن الكوادر المحلية من إجراء الفحوصات بدقة دون الحاجة لتدريب معقد.",
    impact: [
      ">90% Diagnostic accuracy validated during rigorous clinical evaluations.",
      "Recognized by Google as Top 50 Global Finalist & 3rd Place in MENA (Google Solution Challenge).",
      "1st Place Winner at the PSED Engineering Challenge.",
      "Showcased at the Egyptian Air Defense Academy and the Annual Science Fair of the Military Technical College."
    ],
    impactAr: [
      "دقة تشخيصية تجاوزت 90% تم التحقق منها خلال تجارب إكلينيكية متخصصة.",
      "تكريم من شركة Google العالمية ضمن أفضل 50 مشروعاً حول العالم والمركز الثالث في الشرق الأوسط وشمال إفريقيا.",
      "المركز الأول في تحدي PSED الهندسي.",
      "تم اختياره للعرض في كلية الدفاع الجوي والمعرض العلمي للكلية الفنية العسكرية."
    ],
    tech: ["Python", "TensorFlow", "ESP32", "SolidWorks", "Biomedical Sensors (PPG, IR, Glucose)", "Kinematics", "Clinical Trials"]
  },

  campus: {
    title: "Smart University & Transit Telemetry System",
    titleAr: "منظومة الجامعة الذكية وتتبع الحافلات الجامعية",
    category: "IoT & Smart Infrastructure",
    categoryAr: "إنترنت الأشياء والبنية التحتية الذكية",
    image: "assets/smart_campus.jpg",
    problem: "Students and campus administrators struggled with unpredictable university bus arrival times, manual cash ticketing inefficiencies, and sluggish class attendance verification.",
    problemAr: "عانت المنظومة الجامعية من عدم انتظام مواعيد وصول الحافلات، وبطء المعاملات النقدية للتذاكر، وصعوبة تسجيل حضور آلاف الطلاب بدقة وسرعة.",
    solution: "Designed and deployed a comprehensive IoT network using ESP32/ESP8266 telemetry units installed in fleet buses for real-time GPS coordinates, speed, and ETA tracking. Integrated an RFID campus-wide cashless payment infrastructure and built a Flutter mobile companion featuring dynamic bus schedules, facial recognition attendance, and automated complaint escalation.",
    solutionAr: "تصميم ونشر شبكة IoT متكاملة عبر تركيب وحدات تتبع ESP32/ESP8266 في حافلات النقل لنقل الإحداثيات والسرعة ومواعيد الوصول عبر GPS لحظياً، مع شبكة دفع إلكتروني غير تلامسية RFID وبناء تطبيق Flutter متكامل يتيح التتبع المباشر وتسجيل الحضور بالتعرف على الوجه.",
    impact: [
      "Eliminated bus waiting times with live real-time GPS telemetry.",
      "100% cashless payment transitions across supported transit lines.",
      "Automated attendance logging with minimal verification friction."
    ],
    impactAr: [
      "تقليل أوقات انتظار الحافلات عبر التتبع اللحظي الدقيق عبر الخرائط.",
      "تحويل خطوط النقل إلى دفع رقمي غير تلامسي 100% عبر بطاقات RFID.",
      "أتمتة تسجيل حضور الطلاب بدقة ومنع التزاحم."
    ],
    tech: ["ESP32 / ESP8266", "Flutter", "GPS Telemetry", "RFID Cards", "Computer Vision (Facial Recognition)", "MQTT / REST"]
  },

  kiosk: {
    title: "Smart Hand Sanitizer & Health Telemetry Kiosk",
    titleAr: "كشك التعقيم الذكي ورصد القياسات الحيوية",
    category: "Biomedical IoT Device",
    categoryAr: "أجهزة القياسات الحيوية وإنترنت الأشياء",
    image: "assets/smart_kiosk.jpg",
    problem: "During epidemic outbreaks and high-density events, traditional temperature checks were slow, required close physical contact, and failed to record historic student health data.",
    problemAr: "خلال الأوبئة والفعاليات الحاشدة، تسبب الفحص اليدوي لدرجات الحرارة في طوابير انتظار وتلامس بشري مع غياب تام لأرشفة البيانات الصحية للزوار.",
    solution: "Built a contactless, automated health telemetry kiosk powered by an ESP32 microcontroller and a 7-inch TFT color screen. Integrated a MAX30102 pulse oximeter for heart rate and SpO2 oxygen levels, an MLX90614 medical-grade infrared thermometer via I2C for zero-contact thermal scans, and an RFID reader to log verified metrics against student records.",
    solutionAr: "بناء كشك فحص صحي آلي غير تلامسي يعمل بمعالج ESP32 وشاشة TFT ملونة قياس 7 بوصات، مزود بمستشعر MAX30102 لقياس نبضات القلب ونسبة تشبع الأكسجين SpO2، ومستشعر MLX90614 للأشعة تحت الحمراء للقياس الحراري الطبي عن بُعد، وقارئ RFID لربط البيانات بهوية الطالب تلقائياً.",
    impact: [
      "Instant 2-second automated screening and attendance logging.",
      "Zero physical human contact for temperature and hygiene dispension.",
      "Exhibited at the Egyptian Air Defense Academy and Military Technical College Science Fair."
    ],
    impactAr: [
      "فحص آلي فوري وتوثيق الحضور خلال ثانيتين فقط.",
      "انعدام التلامس البشري تماماً مع تعقيم تلقائي ذكي.",
      "تم اختياره للعرض في كلية الدفاع الجوي والمعرض العلمي للكلية الفنية العسكرية."
    ],
    tech: ["ESP32", "MAX30102 Sensor", "MLX90614 IR Thermometer", "7-inch TFT Display", "I2C Protocol", "RFID Attendance"]
  },

  rag: {
    title: "Taxonomic RAG Architecture for Cardiology Decision Support",
    titleAr: "معمارية RAG تصنيفية لدعم قرارات طب القلب",
    category: "Clinical AI Research (ITC-Egypt 2026)",
    categoryAr: "بحث سريري بالذكاء الاصطناعي (مؤتمر ITC-Egypt 2026)",
    image: null,
    problem: "Large Language Models frequently generate clinical hallucinations when queried with complex medical data, creating catastrophic risks in sensitive domains such as cardiology.",
    problemAr: "تعاني نماذج اللغة الكبيرة (LLMs) من ظاهرة الهلوسة الطبية وتقديم معلومات غير دقيقة سريرياً، مما يمثل خطراً جسيماً في تخصصات حساسة كطب القلب والأوعية الدموية.",
    solution: "Formulated a pioneering research architecture treating clinical hallucinations analogous to network security intrusions. Designed a multi-tier intrusion detection taxonomy (Signature, Anomaly, Hybrid Verification) specifically tailored for cardiology clinical guidelines and patient records.",
    solutionAr: "ابتكار معمارية بحثية فريدة تعامل الهلوسة الطبية كاختراق شبكي، مع تطبيق تصنيف أمني ثلاثي (Signature-based, Anomaly-based, Hybrid Verification) للتحقق الدقيق من مطابقة مخرجات الذكاء الاصطناعي للإرشادات السريرية المعتمدة لأمراض القلب.",
    impact: [
      "Documented in academic paper EDAS #256 (Mansoura University).",
      "Submitted to ITC-Egypt 2026 International Technical Conference.",
      "Demonstrated significant reduction in false clinical recommendations."
    ],
    impactAr: [
      "توثيق المعمارية في ورقة بحثية أكاديمية EDAS #256 (جامعة المنصورة).",
      "مُقدمة للمؤتمر الفني الدولي ITC-Egypt 2026.",
      "أثبتت تقليصاً هائلاً في التوصيات الطبية الخاطئة."
    ],
    tech: ["Retrieval-Augmented Generation (RAG)", "Taxonomic Security Filtering", "Cardiology Ontologies", "Python", "Vector Databases"]
  },

  hudhud: {
    title: "HudHud National Software Initiative (Saudi Arabia)",
    titleAr: "مشروع هدهد الوطني للبرمجيات (المملكة العربية السعودية)",
    category: "Enterprise System Architecture",
    categoryAr: "معمارية الأنظمة المؤسسية الكبرى",
    image: null,
    problem: "Scaling a nationwide digital initiative demanded rigorous sprint planning, multi-repository code orchestration, and aligning disparate engineering squads under stringent delivery timelines.",
    problemAr: "تطلب توسيع نطاق مبادرة رقمية وطنية تخطيطاً دقيقاً لسباقات التطوير، وتنسيق مستودعات الكود البرمجي المتعددة، وتوحيد فرق العمل الهندسية المختلفة تحت جداول زمنية صارمة.",
    solution: "Spearheaded cross-functional team coordination across backend, frontend, and quality assurance. Promoted to Vice Head of Development in March 2024 to re-architect microservices, institute CI/CD practices, and guarantee product robustness under high concurrency.",
    solutionAr: "قيادة التنسيق بين فرق التطوير (الواجهات، الباك إند، واختبار الجودة). الترقية لمنصب نائب رئيس قسم التطوير في مارس 2024 لإعادة هندسة بنية الخدمات المصغرة وتطبيق ممارسات النشر المؤتمت CI/CD وضمان استقرار النظام.",
    impact: [
      "Streamlined sprint velocity by 40% through unified architecture standards.",
      "Promoted to Vice Head of Development within 4 months of tenure.",
      "Successfully led software release milestones for key national stakeholders."
    ],
    impactAr: [
      "تسريع وتيرة إنجاز المهام بنسبة 40% عبر توحيد المعايير المعمارية.",
      "الترقية لمنصب نائب رئيس قسم التطوير تقديراً للتميز التقني والإداري.",
      "تسليم مراحل الإطلاق البرمجية بنجاح أمام الشركاء والجهات الرسمية."
    ],
    tech: ["Microservices", "System Architecture", "Agile / Scrum", "DevOps & CI/CD", "Team Leadership"]
  },

  essic: {
    title: "Essic Enterprise Document Intelligence & Sync System",
    titleAr: "منظومة Essic المؤسسية لترقيم وأرشفة الوثائق السحابية",
    category: "Full-Stack Enterprise Cloud System",
    categoryAr: "نظام سحابي مؤسسي متكامل",
    image: null,
    problem: "Engineering faculties and corporate offices suffered from disjointed manual letter numbering, duplicated document serials, and unverified document distribution.",
    problemAr: "عانت المكاتب الإدارية والهندسية من أخطاء ترقيم الخطابات الرسمية يدوياً، وتكرار الأرقام التسلسلية، وفقدان المستندات المعتمدة.",
    solution: "Architected a secure web system with Python Flask, Supabase PostgreSQL, and automated OneDrive cloud synchronization using guest token handshakes. Features automated sequential numbering, department isolation, and tamper-proof preview generation.",
    solutionAr: "تطوير نظام ويب آمن باستخدام Python Flask وقواعد بيانات Supabase PostgreSQL والمزامنة التلقائية مع مجلدات OneDrive المؤسسية. يتضمن ترقيماً تسلسلياً ذكياً، وفصل الصلاحيات بين الأقسام، وتوليد معاينات آمنة للمستندات.",
    impact: [
      "Zero document numbering collisions across institutional departments.",
      "Instant real-time backup and sync with institutional OneDrive directories.",
      "Currently deployed and active in production."
    ],
    impactAr: [
      "القضاء تماماً على تكرار أرقام الوثائق بين الأقسام المختلفة.",
      "مزامنة وأرشفة سحابية فورية مع حسابات OneDrive المعتمدة.",
      "النظام يعمل بنجاح في بيئة الإنتاج الفعلية."
    ],
    tech: ["Python Flask", "Supabase (PostgreSQL)", "OneDrive API Integration", "RESTful Architecture", "HTML5/CSS3"]
  }
};

// ==========================================================================
// 3. APPLICATION STATE & INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initRoleTyping();
  initProjectFilters();
  initCaseStudyModal();
  initContactForm();
  initCopyButtons();
  initMobileMenu();
  initScrollSpy();
});

// ==========================================================================
// 4. THEME CONTROLLER (Dark / Light)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeIcon = document.getElementById("theme-icon");
  
  // Check localStorage or system preference
  const savedTheme = localStorage.getItem("ahmad_portfolio_theme") || "dark";
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("ahmad_portfolio_theme", theme);
    if (themeIcon) {
      if (theme === "light") {
        themeIcon.className = "fa-solid fa-sun";
      } else {
        themeIcon.className = "fa-solid fa-moon";
      }
    }
  }
}

// ==========================================================================
// 5. LANGUAGE CONTROLLER (EN / AR)
// ==========================================================================
function initLanguage() {
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const langLabel = document.getElementById("lang-label");

  // Check localStorage or default to EN
  const savedLang = localStorage.getItem("ahmad_portfolio_lang") || "en";
  applyLanguage(savedLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const currentLang = document.documentElement.getAttribute("lang") || "en";
      const nextLang = currentLang === "en" ? "ar" : "en";
      applyLanguage(nextLang);
    });
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("ahmad_portfolio_lang", lang);

    if (langLabel) {
      langLabel.textContent = lang === "ar" ? "English" : "العربية";
    }

    // Update all i18n text nodes
    const trans = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (trans[key]) {
        el.textContent = trans[key];
      }
    });

    // Update typing list based on language
    updateRoleTypingList(lang);
  }
}

// ==========================================================================
// 6. HERO TYPED ROLES ANIMATION
// ==========================================================================
let typingTimeout = null;
let currentRoles = ["Medical Diagnostic Robots", "AI Healthcare Systems", "Embedded IoT Devices", "Clinical RAG Architectures"];

function updateRoleTypingList(lang) {
  if (lang === "ar") {
    currentRoles = [
      "روبوتات التشخيص الطبي",
      "أنظمة الرعاية الصحية بالذكاء الاصطناعي",
      "أجهزة إنترنت الأشياء والأنظمة المدمجة",
      "معماريات الذكاء الاصطناعي السريري"
    ];
  } else {
    currentRoles = [
      "Medical Diagnostic Robots",
      "AI Healthcare Systems",
      "Embedded IoT Devices",
      "Clinical RAG Architectures"
    ];
  }
}

function initRoleTyping() {
  const el = document.getElementById("typed-role-text");
  if (!el) return;

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 90;
  const deleteSpeed = 45;
  const delayBetween = 1800;

  function typeStep() {
    const fullText = currentRoles[roleIdx % currentRoles.length];
    
    if (isDeleting) {
      el.textContent = fullText.substring(0, charIdx - 1);
      charIdx--;
    } else {
      el.textContent = fullText.substring(0, charIdx + 1);
      charIdx++;
    }

    let delta = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === fullText.length) {
      delta = delayBetween;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx++;
      delta = 400;
    }

    typingTimeout = setTimeout(typeStep, delta);
  }

  typeStep();
}

// ==========================================================================
// 7. PROJECT FILTERING
// ==========================================================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const categories = (card.getAttribute("data-category") || "").split(" ");
        if (filterValue === "all" || categories.includes(filterValue)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 10);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });
}

// ==========================================================================
// 8. CASE STUDY MODAL DIALOG
// ==========================================================================
function initCaseStudyModal() {
  const modal = document.getElementById("case-study-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const dynamicContent = document.getElementById("modal-dynamic-content");

  if (!modal || !dynamicContent) return;

  // Open modal handlers
  document.querySelectorAll(".open-case-study").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute("data-project");
      const data = caseStudiesData[projKey];
      if (!data) return;

      const isAr = document.documentElement.getAttribute("lang") === "ar";

      const title = isAr ? data.titleAr : data.title;
      const category = isAr ? data.categoryAr : data.category;
      const problem = isAr ? data.problemAr : data.problem;
      const solution = isAr ? data.solutionAr : data.solution;
      const impactList = isAr ? data.impactAr : data.impact;

      const problemHeading = isAr ? "التحدي الهندسي والمشكلة" : "Engineering Challenge & Problem";
      const solutionHeading = isAr ? "الحل الهندسي والابتكار" : "The Engineering Solution";
      const impactHeading = isAr ? "النتائج والتأثير المعتمد" : "Verified Clinical & Operational Impact";
      const techHeading = isAr ? "الأدوات والترسانة التقنية" : "Tech Stack & Hardware Used";

      let imageHtml = "";
      if (data.image) {
        imageHtml = `
          <div style="width: 100%; height: 280px; overflow: hidden; border-radius: 12px; margin-bottom: 24px;">
            <img src="${data.image}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
        `;
      }

      dynamicContent.innerHTML = `
        ${imageHtml}
        <span class="category-pill" style="margin-bottom: 8px; display: inline-block;">${category}</span>
        <h2 style="font-size: 1.6rem; margin-bottom: 24px;">${title}</h2>

        <div style="display: flex; flex-direction: column; gap: 20px; text-align: ${isAr ? 'right' : 'left'};">
          <div>
            <h4 style="color: var(--accent-cyan); font-size: 1.1rem; margin-bottom: 8px;">
              <i class="fa-solid fa-triangle-exclamation"></i> ${problemHeading}
            </h4>
            <p style="color: var(--text-secondary); line-height: 1.7;">${problem}</p>
          </div>

          <div>
            <h4 style="color: var(--accent-teal); font-size: 1.1rem; margin-bottom: 8px;">
              <i class="fa-solid fa-lightbulb"></i> ${solutionHeading}
            </h4>
            <p style="color: var(--text-secondary); line-height: 1.7;">${solution}</p>
          </div>

          <div>
            <h4 style="color: #fbbf24; font-size: 1.1rem; margin-bottom: 8px;">
              <i class="fa-solid fa-award"></i> ${impactHeading}
            </h4>
            <ul style="display: flex; flex-direction: column; gap: 6px; padding-${isAr ? 'right' : 'left'}: 20px;">
              ${impactList.map(item => `<li style="color: var(--text-primary); font-size: 0.95rem; list-style-type: disc;">${item}</li>`).join("")}
            </ul>
          </div>

          <div>
            <h4 style="color: var(--text-secondary); font-size: 1rem; margin-bottom: 10px;">
              <i class="fa-solid fa-layer-group"></i> ${techHeading}
            </h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${data.tech.map(t => `<span class="chip chip-highlight">${t}</span>`).join("")}
            </div>
          </div>
        </div>
      `;

      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close handlers
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
  });

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// ==========================================================================
// 9. COPY-TO-CLIPBOARD UTILITY
// ==========================================================================
function initCopyButtons() {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const isAr = document.documentElement.getAttribute("lang") === "ar";
        showToast(isAr ? `تم نسخ: ${textToCopy}` : `Copied: ${textToCopy}`);
      }).catch(err => {
        console.error("Clipboard copy failed", err);
      });
    });
  });
}

// ==========================================================================
// 10. CONTACT FORM HANDLER
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const service = document.getElementById("contact-service").value;
    const message = document.getElementById("contact-message").value.trim();
    const isAr = document.documentElement.getAttribute("lang") === "ar";

    if (!name || !email || !message) {
      showToast(isAr ? "يرجى ملء جميع الحقول المطلوبة." : "Please fill out all required fields.");
      return;
    }

    // Direct mailto link preparation
    const subject = encodeURIComponent(`Inquiry from Portfolio: ${name} (${service})`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService Interested: ${service}\n\nProject Requirements:\n${message}`
    );
    const mailtoUrl = `mailto:elshafee.k@yahoo.com?subject=${subject}&body=${body}`;

    showToast(isAr ? "جاري تحضير الرسالة وفتح تطبيق البريد..." : "Preparing message and opening mail client...");

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });
}

// ==========================================================================
// 11. TOAST NOTIFICATIONS
// ==========================================================================
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("active");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

// ==========================================================================
// 12. MOBILE MENU
// ==========================================================================
function initMobileMenu() {
  const btn = document.getElementById("mobile-toggle-btn");
  const nav = document.getElementById("main-nav");

  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close when link is clicked
  nav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================================================
// 13. ACTIVE SCROLLSPY
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

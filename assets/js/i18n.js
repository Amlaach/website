/**
 * TypesetOK (TOK) — Multilingual Translation Engine
 * Supports: Hebrew (he), US English (en), Spanish (es), French (fr).
 * Colloquial, natural, and professional terminology in all languages.
 */

const TOK_TRANSLATIONS = {
  he: {
    // Navigation
    nav_home: "ראשי",
    nav_story: "ארכיטקטורה",
    nav_principles: "עקרונות עימוד",
    nav_comparison: "השוואה",
    nav_workbench: "קונספט ממשק",
    nav_features: "יכולות",
    nav_pipeline: "צינור עבודה",
    nav_engineering: "בנצ'מרק",
    nav_developer: "אתר המפתח",
    btn_github: "פרויקט ב-GitHub",
    btn_architecture: "דו״ח ארכיטקטורה",
    btn_source_guide: "מדריך פיתוח",

    // Hero
    hero_badge: "מחקר, ארכיטקטורה וקוד פתוח • שפת Rust 1.85+ • תקן ת״י 6100",
    hero_title_1: "החזון לעימוד עברי מקצועי.",
    hero_title_2: "דיוק של דפוס, מהירות של Rust.",
    hero_desc: "TypesetOK (TOK) היא מערכת עימוד ופרסום שולחני (DTP) מודרנית בקוד פתוח הנמצאת במחקר ופיתוח עבור טיפוגרפיה עברית מתקדמת, ספרי קודש (ש״ס, מקראות גדולות ושו״ת), ומסמכי ענק בני אלפי עמודים — במפרט הנדסי קפדני ללא פשרות.",
    hero_cta_github: "צפה בקוד ב-GitHub",
    hero_cta_arch: "מפרט ארכיטקטוני מלא",
    hero_cta_dev: "אתר המפתח (Amlaach)",
    metric_tests: "58 / 58",
    metric_tests_label: "בדיקות ליבה ב-Rust עוברות",
    metric_clippy: "0 אזהרות",
    metric_clippy_label: "קוד נקי בתקן Clippy",
    metric_standards: "ת״י 6100 & ISO 15930",
    metric_standards_label: "עמידה מלאה בתקני דפוס ויוניקוד",

    // Hero Specimen Plate
    plate_badge: "גליון הוכחה ארכיטקטוני • TypesetOK Monograph",
    plate_title: "סֵפֶר תְּהִלִּים — מִזְמוֹר כ״ג",
    plate_text: "מִזְמ֥וֹר לְדָוִ֑ד יְהוָ֥ה רֹ֝עִ֗י לֹ֣א אֶחְסָֽר׃ בִּנְא֣וֹת דֶּ֭שֶׁא יַרְבִּיצֵ֑נִי עַל־מֵ֖י מְנֻח֣וֹת יְנַהֲלֵֽנִי׃ נַפְשִׁ֥י יְשׁוֹבֵ֑ב יַֽנְחֵ֥נִי בְמַעְגְּלֵי־צֶ֝֗דֶק לְמַ֣עַן שְׁמֽוֹ׃ גַּ֤ם כִּֽי־אֵלֵ֨ךְ בְּגֵ֪יא צַלְמָ֡וֶת לֹא־אִ֘ירָ֤א רָ֗ע כִּי־אַתָּ֥ה עִמָּדִ֑י שִׁבְטְךָ֥ וּ֝מִשְׁעַנְתֶּ֗ךָ הֵ֣מָּה יְנַֽחֲמֻֽנִי׃",
    plate_caption: "עימוד מבוסס יחס הזהב, אותיות מתרחבות אהלתר״ם וסנכרון קווי בסיס",

    // Storytelling
    story_pretitle: "פרק א׳: עמודי התווך של הארכיטקטורה",
    story_title: "שלושה עקרונות הנדסיים מנחים",
    story_subtitle: "כיצד תוכנן מנוע העימוד של TypesetOK לפתור את האתגרים ההיסטוריים של עולם הדפוס העברי.",
    scene1_num: "עקרון 01",
    scene1_title: "נרמול קפדני לפי תקן ישראלי ת\"י 6100",
    scene1_desc: "מעבדי תמלילים ומערכות עימוד מערביות משבשות לעיתים קרובות את סדר האותיות והניקוד ביוניקוד. TypesetOK אוכפת סדר יוניקוד דטרמיניסטי מלא ומפעילה מנוע גימטריה דטרמיניסטי למניעת צירופי טאבו ושמות קודש (15 ← ט״ו, 16 ← ט״ז, 270 ← ע״ר).",
    scene2_num: "עקרון 02",
    scene2_title: "פותר אילוצים רב-תזרימי (Talmud Solver)",
    scene2_desc: "עמודי ש\"ס ומקראות גדולות הם פסגת הקושי הטיפוגרפי העולמי: גמרא במרכז, רש\"י בצד אחד ותוספות בצד השני, כאשר כל שינוי בפסקה אחת משפיע על גלישת הטקסט של שני הפירושים האחרים. מפרט המערכת מגדיר פותר אילוצים מתמטי ייעודי לסנכרון רציף.",
    scene3_num: "עקרון 03",
    scene3_title: "קדם-דפוס נייטיב: ISO 15930 (PDF/X-1a)",
    scene3_desc: "ללא הסתמכות על מנועי הדפסת דפדפן המוגבלים ל-sRGB. מנוע ה-Rust מתוכנן לייצר ישירות קובצי דפוס מובהקים: שחור 100% K (DeviceCMYK), צלבי רישום וסימני חיתוך וקטוריים, תיבות BleedBox ו-TrimBox של 3 מ\"מ, ופרופילי Fogra 39.",

    // Comparison
    comp_pretitle: "פרק ב׳: השוואה טיפוגרפית מעמיקה",
    comp_title: "מעבד תמלילים רגיל מול אופטימיזציית TypesetOK",
    comp_subtitle: "גררו את הסליידר או לחצו על הלחצנים המהירים כדי להשוות בין תוצר שבירת שורות פרימיטיבית בוורד לבין בלוק העימוד המהודק עם Knuth-Plass ואותיות התפשטות.",
    comp_preset_before: "וורד (לפני)",
    comp_preset_half: "חצי-חצי (50%)",
    comp_preset_after: "TypesetOK (אחרי)",
    comp_before_label: "מעבד תמלילים מסורתי (וורד)",
    comp_before_note: "⚠️ שורות רפויות, 'נהרות' לבנים פעורים, היעדר התאמת אותיות התפשטות ואי-אחידות בצפיפות.",
    comp_after_label: "מפרט TypesetOK (Knuth-Plass + אהלתר״ם)",
    comp_after_note: "✓ בלוק טיפוגרפי אחיד, שבירת שורות גלובלית, אותיות מתרחבות אהלתר״ם וסנכרון מלא לקווי בסיס.",

    // Playground
    pg_pretitle: "פרק ג׳: הדגמת עקרונות טיפוגרפיים",
    pg_title: "מעבדת שליטה במאפייני הטיפוגרפיה",
    pg_subtitle: "התנסו בפרמטרים הטיפוגרפיים וראו כיצד משפיעים רווחי השורות, חלוקת הטורים ומדרגי היישור העבריים על שטף הקריאה.",
    pg_disclaimer: "הדגמה אינטראקטיבית של עקרונות שבירת שורות, קווי בסיס ואותיות התפשטות (אהלתר״ם)",

    // Developer Section
    dev_pretitle: "פרק ד׳: אודות הפרויקט והמפתח",
    dev_title: "חזון הקוד הפתוח של Amlaach",
    dev_desc: "פרויקט TypesetOK הוקם מתוך צורך אמיתי של עולם הדפוס העברי והספרות התורנית בכלי עימוד מודרני, אמין, מהיר וחופשי ממנעולים מסחריים מיושנים. הפרויקט מנוהל ומפותח על ידי Amlaach.",
    dev_btn_portfolio: "בקרו באתר האישי של Amlaach",
    dev_btn_github: "מאגר TypesetOK ב-GitHub",

    // A11y Panel
    a11y_panel_title: "תפריט נגישות מורחב",
    a11y_font_inc: "הגדל גופן (+)",
    a11y_font_dec: "הקטן גופן (-)",
    a11y_contrast: "ניגודיות גבוהה",
    a11y_theme: "מצב יום / לילה",
    a11y_readable_font: "גופן קריא / פשוט",
    a11y_links: "הדגשת קישורים",
    a11y_headings: "הדגשת כותרות",
    a11y_big_cursor: "סמן עכבר מוגדל",
    a11y_motion: "עצירת תנועה",
    a11y_spacing: "ריווח שורות רחב",
    a11y_letters: "ריווח אותיות",
    a11y_monochrome: "גווני אפור",
    a11y_reset: "איפוס כל הגדרות הנגישות"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_story: "Architecture",
    nav_principles: "Typography",
    nav_comparison: "Comparison",
    nav_workbench: "UI Concept",
    nav_features: "Features",
    nav_pipeline: "Pipeline",
    nav_engineering: "Benchmarks",
    nav_developer: "Developer Site",
    btn_github: "GitHub Project",
    btn_architecture: "Architecture Spec",
    btn_source_guide: "Dev Guide",

    // Hero
    hero_badge: "Open-Source Research & Spec • Rust 1.85+ Engine • SI 6100 Standard",
    hero_title_1: "The Future of Hebrew Typesetting.",
    hero_title_2: "Press-Ready Precision. Rust-Fast Speed.",
    hero_desc: "TypesetOK (TOK) is an open-source Desktop Publishing (DTP) research and development project crafted from scratch for advanced Hebrew typography, sacred texts (Talmud, Mikraot Gedolot, Responsa), and thousand-page manuscripts — with uncompromising engineering integrity.",
    hero_cta_github: "View on GitHub",
    hero_cta_arch: "Read Architecture Spec",
    hero_cta_dev: "Developer Site (Amlaach)",
    metric_tests: "58 / 58",
    metric_tests_label: "Core Rust unit tests passing",
    metric_clippy: "0 Warnings",
    metric_clippy_label: "Strict Clippy compliance",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Full Unicode & Pre-press standards",

    // Hero Specimen Plate
    plate_badge: "Architectural Proof Sheet • TypesetOK Monograph",
    plate_title: "BOOK OF PSALMS — CHAPTER XXIII",
    plate_text: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake. Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.",
    plate_caption: "Golden ratio page geometry, classical Hebrew typography, and baseline grid lock",

    // Storytelling
    story_pretitle: "Chapter I: Architectural Pillars",
    story_title: "Three Guiding Engineering Principles",
    story_subtitle: "How the TypesetOK engine solves historic bottlenecks in Hebrew publishing.",
    scene1_num: "Pillar 01",
    scene1_title: "Strict Normalization via Israeli Standard SI 6100",
    scene1_desc: "General word processors and legacy Western DTP software often mangle Unicode Hebrew vocalization and cantillation. TypesetOK enforces deterministic canonical Unicode ordering and taboo gematria substitution (15 → ט״ו, 16 → ט״ז).",
    scene2_num: "Pillar 02",
    scene2_title: "Multi-Flow Constraint Solver (Talmud Layout)",
    scene2_desc: "Talmud and rabbinic editions are the absolute pinnacle of typesetting complexity: central text flanked by commentators whose heights dynamically dictate layout. TypesetOK specifies a dedicated mathematical constraint solver for seamless cross-page sync.",
    scene3_num: "Pillar 03",
    scene3_title: "Native Pre-Press Engine: ISO 15930 (PDF/X-1a)",
    scene3_desc: "No relying on browser print engines crippled by sRGB. The Rust engine directly targets pure DeviceCMYK 100% K black, vector crop marks, 3mm BleedBox, Fogra 39 profiles, and PostScript /ToUnicode mapping for pristine text search.",

    // Comparison
    comp_pretitle: "Chapter II: Deep Typographic Comparison",
    comp_title: "Office Word Processor vs TypesetOK Optimization",
    comp_subtitle: "Drag the slider or click presets to see the difference between primitive line breaking (loose word rivers) and TypesetOK's Knuth-Plass global line-breaking with authentic Hebrew expanding letters.",
    comp_preset_before: "Word (Before)",
    comp_preset_half: "Split (50%)",
    comp_preset_after: "TypesetOK (After)",
    comp_before_label: "Standard Word Processor (MS Word)",
    comp_before_note: "⚠️ Gaping white rivers, loose line breaks, stretched inter-word spaces, and inconsistent gray typographic density.",
    comp_after_label: "TypesetOK Specification (Knuth-Plass + Expanding Glyphs)",
    comp_after_note: "✓ Harmonious typographic block, global paragraph demerit minimization, extending letters (אהלתר״ם), and strict baseline sync.",

    // Playground
    pg_pretitle: "Chapter III: Typographic Demonstration",
    pg_title: "Typography & Layout Playground",
    pg_subtitle: "Explore how leading, column counts, and Hebrew multi-tier justification affect readability.",
    pg_disclaimer: "Interactive demonstration of line-breaking, baseline grids, and extending Hebrew letters (Otiyot Hitpashtut)",

    // Developer Section
    dev_pretitle: "Chapter IV: About the Creator",
    dev_title: "Open Source Vision by Amlaach",
    dev_desc: "TypesetOK was founded to liberate Hebrew typesetting from proprietary decades-old legacy lock-ins. Built and spearheaded by Amlaach.",
    dev_btn_portfolio: "Visit Amlaach's Personal Portfolio",
    dev_btn_github: "TypesetOK GitHub Organization",

    // A11y Panel
    a11y_panel_title: "Accessibility Preferences",
    a11y_font_inc: "Increase Text (+)",
    a11y_font_dec: "Decrease Text (-)",
    a11y_contrast: "High Contrast",
    a11y_theme: "Day / Night Mode",
    a11y_readable_font: "Dyslexia Font",
    a11y_links: "Highlight Links",
    a11y_headings: "Highlight Headings",
    a11y_big_cursor: "Large Cursor",
    a11y_motion: "Reduce Motion",
    a11y_spacing: "Wide Line Spacing",
    a11y_letters: "Wide Letter Spacing",
    a11y_monochrome: "Grayscale Mode",
    a11y_reset: "Reset All Preferences"
  },

  es: {
    // Navigation
    nav_home: "Inicio",
    nav_story: "Arquitectura",
    nav_principles: "Tipografía",
    nav_comparison: "Comparación",
    nav_workbench: "Concepto UI",
    nav_features: "Capacidades",
    nav_pipeline: "Flujo",
    nav_engineering: "Métricas",
    nav_developer: "Sitio del Desarrollador",
    btn_github: "Proyecto en GitHub",
    btn_architecture: "Especificación",
    btn_source_guide: "Guía de Desarrollo",

    // Hero
    hero_badge: "Investigación y Código Abierto • Motor Rust 1.85+ • Estándar SI 6100",
    hero_title_1: "El futuro de la tipografía hebrea.",
    hero_title_2: "Precisión editorial. Velocidad Rust.",
    hero_desc: "TypesetOK (TOK) es un proyecto de investigación y desarrollo de autoedición (DTP) de código abierto diseñado desde cero para tipografía hebrea avanzada, textos sagrados (Talmud, responsa) y libros masivos de miles de páginas.",
    hero_cta_github: "Ver en GitHub",
    hero_cta_arch: "Leer Informe Técnico",
    hero_cta_dev: "Sitio del Desarrollador (Amlaach)",
    metric_tests: "58 / 58",
    metric_tests_label: "Pruebas unitarias superadas en Rust",
    metric_clippy: "0 Advertencias",
    metric_clippy_label: "Estándar estricto Clippy",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Cumplimiento normativo total",

    // Hero Specimen Plate
    plate_badge: "Pliego Arquitectónico • TypesetOK Monograph",
    plate_title: "LIBRO DE LOS SALMOS — CAPÍTULO XXIII",
    plate_text: "El Señor es mi pastor; nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará. Confortará mi alma; me guiará por sendas de justicia por amor de su nombre.",
    plate_caption: "Geometría áurea, tipografía hebrea clásica y sincronización de rejilla base",

    // Storytelling
    story_pretitle: "Capítulo I: Pilares de Arquitectura",
    story_title: "Tres Principios de Ingeniería",
    story_subtitle: "Cómo el motor TypesetOK resuelve los cuellos de botella históricos del libro hebreo.",
    scene1_num: "Pilar 01",
    scene1_title: "Normalización estricta según la norma israelí SI 6100",
    scene1_desc: "Los procesadores de texto comunes suelen alterar el orden de las vocales y los signos diacríticos en hebreo. TypesetOK impone un orden canónico determinista y sustitución de gematría tabú.",
    scene2_num: "Pilar 02",
    scene2_title: "Solucionador multiflujo para páginas complejas (Talmud)",
    scene2_desc: "El diseño del Talmud es la cumbre de la complejidad: texto central y comentarios laterales que interactúan dinámicamente sin romper la simetría de la página.",
    scene3_num: "Pilar 03",
    scene3_title: "Preprensa nativa: ISO 15930 (PDF/X-1a)",
    scene3_desc: "Sin depender de motores de navegador. Salida directa con 100% K negro puro (DeviceCMYK), sangrado de 3 mm y perfiles Fogra 39.",

    // Comparison
    comp_pretitle: "Capítulo II: Comparativa Tipográfica",
    comp_title: "Procesador Común vs Optimización TypesetOK",
    comp_subtitle: "Mueva el control deslizante para comparar el espaciado deficiente con la justificación óptima Knuth-Plass.",
    comp_preset_before: "Word (Antes)",
    comp_preset_half: "Mitad (50%)",
    comp_preset_after: "TypesetOK (Después)",
    comp_before_label: "Procesador de Texto Común (Word)",
    comp_before_note: "⚠️ Espacios irregulares, 'ríos' blancos y deformación del ritmo visual.",
    comp_after_label: "Especificación TypesetOK (Knuth-Plass + Letras Expansibles)",
    comp_after_note: "✓ Mancha tipográfica armónica, minimización global de demerits y rejilla base alineada.",

    // Playground
    pg_pretitle: "Capítulo III: Demostración Tipográfica",
    pg_title: "Laboratorio de Parámetros Tipográficos",
    pg_subtitle: "Compruebe en tiempo real cómo influyen el interlineado y el número de columnas.",
    pg_disclaimer: "Demostración interactiva de principios de diseño y letras hebreas expansibles",

    // Developer Section
    dev_pretitle: "Capítulo IV: Acerca del Desarrollador",
    dev_title: "Visión de Código Abierto por Amlaach",
    dev_desc: "TypesetOK fue iniciado para dar a la edición hebrea una herramienta moderna y libre. Liderado por Amlaach.",
    dev_btn_portfolio: "Visitar Portafolio de Amlaach",
    dev_btn_github: "Organización en GitHub",

    // A11y Panel
    a11y_panel_title: "Opciones de Accesibilidad",
    a11y_font_inc: "Aumentar Letra (+)",
    a11y_font_dec: "Reducir Letra (-)",
    a11y_contrast: "Alto Contraste",
    a11y_theme: "Modo Día / Noche",
    a11y_readable_font: "Fuente Dislexia",
    a11y_links: "Resaltar Enlaces",
    a11y_headings: "Resaltar Títulos",
    a11y_big_cursor: "Cursor Grande",
    a11y_motion: "Detener Movimiento",
    a11y_spacing: "Interlineado Amplio",
    a11y_letters: "Espaciado de Letras",
    a11y_monochrome: "Escala de Grises",
    a11y_reset: "Restablecer Opciones"
  },

  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_story: "Architecture",
    nav_principles: "Typographie",
    nav_comparison: "Comparaison",
    nav_workbench: "Concept UI",
    nav_features: "Fonctions",
    nav_pipeline: "Pipeline",
    nav_engineering: "Performances",
    nav_developer: "Site du Développeur",
    btn_github: "Projet GitHub",
    btn_architecture: "Spécification",
    btn_source_guide: "Guide Dev",

    // Hero
    hero_badge: "Recherche Open Source • Moteur Rust 1.85+ • Norme SI 6100",
    hero_title_1: "L'Avenir de la Composition Hébraïque.",
    hero_title_2: "Rigueur Éditoriale. Vitesse Rust.",
    hero_desc: "TypesetOK (TOK) est un projet open source de publication assistée par ordinateur (PAO) conçu dès le départ pour la typographie hébraïque avancée, les textes sacrés (Talmud, Mikraot Gedolot) et les manuscrits massifs de milliers de pages.",
    hero_cta_github: "Voir sur GitHub",
    hero_cta_arch: "Spécification d'Architecture",
    hero_cta_dev: "Site du Développeur (Amlaach)",
    metric_tests: "58 / 58",
    metric_tests_label: "Tests unitaires validés en Rust",
    metric_clippy: "0 Avertissement",
    metric_clippy_label: "Conformité stricte Clippy",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Normes d'impression et Unicode",

    // Hero Specimen Plate
    plate_badge: "Feuille d'Épreuve Architecturale • TypesetOK",
    plate_title: "LIVRE DES PSAUMES — CHAPITRE XXIII",
    plate_text: "L'Éternel est mon berger : je ne manquerai de rien. Il me fait reposer dans de verts pâturages, il me dirige près des eaux paisibles. Il restaure mon âme, il me conduit dans les sentiers de la justice, à cause de son nom.",
    plate_caption: "Proportions dorées, typographie hébraïque classique et grille de justification",

    // Storytelling
    story_pretitle: "Chapitre I: Piliers d'Architecture",
    story_title: "Trois Principes d'Ingénierie",
    story_subtitle: "Comment le moteur TypesetOK résout les défis historiques de l'édition hébraïque.",
    scene1_num: "Pilier 01",
    scene1_title: "Normalisation stricte selon la norme SI 6100",
    scene1_desc: "Les logiciels de traitement de texte altèrent souvent l'ordre des voyelles et signes diacritiques. TypesetOK impose un ordre canonique déterministe.",
    scene2_num: "Pilar 02",
    scene2_title: "Résolveur de contraintes multiflux (Talmud)",
    scene2_desc: "Le sommet de la mise en page : texte central et commentaires périphériques synchronisés de façon fluide sur chaque page.",
    scene3_num: "Pilier 03",
    scene3_title: "Prépresse natif : ISO 15930 (PDF/X-1a)",
    scene3_desc: "Sortie directe sans intermédiaire web : 100% noir K (DeviceCMYK), repères de coupe vectoriels et profils Fogra 39.",

    // Comparison
    comp_pretitle: "Chapitre II: Comparaison Typographique",
    comp_title: "Traitement de Texte vs Optimisation TypesetOK",
    comp_subtitle: "Glissez le curseur pour comparer les césures approximatives de Word avec l'optimisation Knuth-Plass de TypesetOK.",
    comp_preset_before: "Word (Avant)",
    comp_preset_half: "Partage (50%)",
    comp_preset_after: "TypesetOK (Après)",
    comp_before_label: "Traitement de Texte Standard (Word)",
    comp_before_note: "⚠️ Espaces anarchiques, 'lézardes' blanches et manque de régularité.",
    comp_after_label: "Spécification TypesetOK (Knuth-Plass + Lettres Étirables)",
    comp_after_note: "✓ Bloc typographique homogène, minimisation des défauts et alignement sur la grille.",

    // Playground
    pg_pretitle: "Chapitre III: Démonstration Typographique",
    pg_title: "Atelier de Principes Typographiques",
    pg_subtitle: "Testez l'impact de l'interlignage et du nombre de colonnes sur le confort de lecture.",
    pg_disclaimer: "Démonstration interactive des principes de composition et de lettres extensibles",

    // Developer Section
    dev_pretitle: "Chapitre IV: À Propos du Développeur",
    dev_title: "Vision Open Source par Amlaach",
    dev_desc: "TypesetOK a été fondé pour libérer l'édition hébraïque des outils propriétaires désuets. Mené par Amlaach.",
    dev_btn_portfolio: "Consulter le Portfolio d'Amlaach",
    dev_btn_github: "Organisation sur GitHub",

    // A11y Panel
    a11y_panel_title: "Options d'Accessibilité",
    a11y_font_inc: "Agrandir le Texte (+)",
    a11y_font_dec: "Réduire le Texte (-)",
    a11y_contrast: "Contraste Élevé",
    a11y_theme: "Mode Jour / Nuit",
    a11y_readable_font: "Police Lisible",
    a11y_links: "Surligner les Liens",
    a11y_headings: "Surligner les Titres",
    a11y_big_cursor: "Grand Curseur",
    a11y_motion: "Arrêter les Mouvements",
    a11y_spacing: "Interligne Large",
    a11y_letters: "Espacement des Lettres",
    a11y_monochrome: "Nuances de Gris",
    a11y_reset: "Réinitialiser les Options"
  }
};

/**
 * Initializes and switches the application language.
 */
function setAppLanguage(lang) {
  if (!TOK_TRANSLATIONS[lang]) lang = 'he';
  
  localStorage.setItem('tok_lang', lang);
  document.documentElement.lang = lang;
  
  // RTL for Hebrew, LTR for English, Spanish, French
  const isRtl = lang === 'he';
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  const strings = TOK_TRANSLATIONS[lang];

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) {
      el.textContent = strings[key];
    }
  });

  // Update HTML nodes
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (strings[key]) {
      el.innerHTML = strings[key];
    }
  });

  // Update language switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('tok_lang') || 'he';
  setAppLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setAppLanguage(lang);
    });
  });
});

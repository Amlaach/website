/**
 * TypesetOK — Interactive Typography & Layout Playground
 * Provides real-time parameter tweaking for Hebrew typesetting demonstration.
 */
document.addEventListener('DOMContentLoaded', () => {
  const specimenPage = document.getElementById('playgroundSpecimenPage');
  const specimenText = document.getElementById('playgroundSpecimenText');
  
  if (!specimenPage || !specimenText) return;

  // Sliders & Value Badges
  const fontSizeSlider = document.getElementById('pgFontSize');
  const fontSizeVal = document.getElementById('pgFontSizeVal');
  
  const lineHeightSlider = document.getElementById('pgLineHeight');
  const lineHeightVal = document.getElementById('pgLineHeightVal');

  const colGapSlider = document.getElementById('pgColGap');
  const colGapVal = document.getElementById('pgColGapVal');

  // Segmented Buttons
  const colButtons = document.querySelectorAll('.pg-col-btn');
  const tierButtons = document.querySelectorAll('.pg-tier-btn');

  // Toggles
  const toggleNikud = document.getElementById('pgToggleNikud');
  const toggleBaseline = document.getElementById('pgToggleBaseline');
  const resetBtn = document.getElementById('pgResetBtn');

  // Text Datasets
  const textWithNikud = `
    <h4 id="pgHeadline">הִלְכוֹת דֵּעוֹת — פֶּרֶק רִאשׁוֹן</h4>
    <p>
      דֵּעוֹת הַרְבֵּה יֵשׁ לְכָל אֶחָד וְאֶחָד מִבְּנֵי אָדָם, וְזוֹ מְשֻׁנָּה מִזּוֹ וּרְחוֹקָה מִמֶּנָּה בְּיוֹתֵר: 
      יֵשׁ אָדָם שֶׁהוּא בַּעַל חֵמָה כּוֹעֵס תָּמִיד, וְיֵשׁ אָדָם שֶׁדַּעְתּוֹ מְיוּשֶׁבֶת עָלָיו וְאֵינוֹ כּוֹעֵס כְּלָל; 
      וְיֵשׁ אָדָם שֶׁהוּא גְּבַהּ לֵב בְּיוֹתֵר, וְיֵשׁ שֶׁהוּא שְׁפַל רוּחַ בְּתַכְלִית. 
      וְעַל דֶּרֶךְ זוֹ שְׁאָר כָּל הַדֵּעוֹת כֻּלָּן. 
      וְהַדֶּרֶךְ הַיְשָׁרָה הִיא מִדָּה בֵּינוֹנִית שֶׁבְּכָל דֵּעָה וְדֵעָה מִכָּל הַדֵּעוֹת שֶׁיֵּשׁ לוֹ לָאָדָם, 
      וְהִיא הַדֵּעָה שֶׁהִיא רְחוֹקָה מִשְּׁנֵי הַקְּצָווֹת רִחוּק שָׁוֶה, וְאֵינָהּ קְרוֹבָה לֹא לָזוֹ וְלֹא לָזוֹ. 
      לְפִיכָךְ צִוּוּ חֲכָמִים הָרִאשׁוֹנִים שֶׁיְּהֵא אָדָם שָׁם דֵּעוֹתָיו תָּמִיד וּמְשַׁעֵר אוֹתָן וּמְכַוֵּן אוֹתָן 
      בַּדֶּרֶךְ הָאֶמְצָעִית כְּדֵי שֶׁיְּהֵא שָׁלֵם בְּגוּפוֹ וּבְנַפְשׁוֹ.
    </p>
    <p>
      וּמְצֻוִּין אָנוּ לָלֶכֶת בִּדְרָכָיו אֵלּוּ, שֶׁנֶּאֱמַר "וְהָלַכְתָּ בִּדְרָכָיו". 
      וְכָךְ לִמְּדוּ בְּפֵרוּשׁ מִצְוָה זוֹ: מָה הוּא נִקְרָא חַנּוּן, אַף אַתָּה הֱיֵה חַנּוּן; 
      מָה הוּא נִקְרָא רַחוּם, אַף אַתָּה הֱיֵה רַחוּם; מָה הוּא נִקְרָא קָדוֹשׁ, אַף אַתָּה הֱיֵה קָדוֹשׁ.
    </p>
  `;

  const textWithoutNikud = `
    <h4 id="pgHeadline">הלכות דעות — פרק ראשון</h4>
    <p>
      דעות הרבה יש לכל אחד ואחד מבני אדם, וזו משונה מזו ורחוקה ממנה ביותר: 
      יש אדם שהוא בעל חמה כועס תמיד, ויש אדם שדעתו מיושבת עליו ואינו כועס כלל; 
      ויש אדם שהוא גבה לב ביותר, ויש שהוא שפל רוח בתכלית. 
      ועל דרך זו שאר כל הדעות כולן. 
      והדרך הישרה היא מידה בינונית שבכל דעה ודעה מכל הדעות שיש לו לאדם, 
      והיא הדעה שהיא רחוקה משני הקצוות ריחוק שווה, ואינה קרובה לא לזו ולא לזו. 
      לפיכך ציוו חכמים הראשונים שיהא אדם שם דעותיו תמיד ומשער אותן ומכוון אותן 
      בדרך האמצעית כדי שיהא שלם בגופו ובנפשו.
    </p>
    <p>
      ומצווין אנו ללכת בדרכיו אלו, שנאמר "והלכת בדרכיו". 
      וכך לימדו בפירוש מצווה זו: מה הוא נקרא חנון, אף אתה היה חנון; 
      מה הוא נקרא רחום, אף אתה היה רחום; מה הוא נקרא קדוש, אף אתה היה קדוש.
    </p>
  `;

  let currentNikud = true;
  let currentTier = 'tier-2';

  function applyTierStyles() {
    specimenText.classList.remove('tier-1-style', 'tier-2-style', 'tier-3-style');
    specimenText.classList.add(`${currentTier}-style`);

    if (currentTier === 'tier-2') {
      // Highlight extending letters in Tier 2
      const paragraphs = specimenText.querySelectorAll('p');
      paragraphs.forEach(p => {
        // Wrap instances of expanding letters (אהלתר"ם) in end-of-line candidates
        p.innerHTML = p.innerHTML.replace(/(תָּמִיד|בְּיוֹתֵר|לָאָדָם|בַּדֶּרֶךְ|בְּגוּפוֹ|בִּדְרָכָיו)/g, 
          '<span class="expand-letter">$1</span>');
      });
    }
  }

  // Font Size
  if (fontSizeSlider && fontSizeVal) {
    fontSizeSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      specimenText.style.fontSize = `${val}px`;
      fontSizeVal.textContent = `${val}px`;
    });
  }

  // Line Height
  if (lineHeightSlider && lineHeightVal) {
    lineHeightSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      specimenText.style.lineHeight = val;
      lineHeightVal.textContent = val;
    });
  }

  // Column Gap
  if (colGapSlider && colGapVal) {
    colGapSlider.addEventListener('input', (e) => {
      const val = e.target.value;
      specimenText.style.columnGap = `${val}px`;
      colGapVal.textContent = `${val}px`;
    });
  }

  // Column Count Buttons
  colButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      colButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cols = btn.dataset.cols;
      specimenText.style.columnCount = cols;
    });
  });

  // Justification Tier Buttons
  tierButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tierButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTier = btn.dataset.tier;
      renderText();
    });
  });

  // Nikud Toggle
  if (toggleNikud) {
    toggleNikud.addEventListener('click', () => {
      currentNikud = !currentNikud;
      toggleNikud.classList.toggle('active', currentNikud);
      toggleNikud.setAttribute('aria-checked', currentNikud ? 'true' : 'false');
      renderText();
    });
  }

  // Baseline Grid Toggle
  if (toggleBaseline) {
    toggleBaseline.addEventListener('click', () => {
      const isActive = specimenPage.classList.toggle('show-baseline');
      toggleBaseline.classList.toggle('active', isActive);
      toggleBaseline.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
  }

  function renderText() {
    specimenText.innerHTML = currentNikud ? textWithNikud : textWithoutNikud;
    applyTierStyles();
  }

  // Reset to default
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (fontSizeSlider) { fontSizeSlider.value = 18; specimenText.style.fontSize = '18px'; fontSizeVal.textContent = '18px'; }
      if (lineHeightSlider) { lineHeightSlider.value = 1.65; specimenText.style.lineHeight = '1.65'; lineHeightVal.textContent = '1.65'; }
      if (colGapSlider) { colGapSlider.value = 24; specimenText.style.columnGap = '24px'; colGapVal.textContent = '24px'; }
      
      colButtons.forEach(b => b.classList.toggle('active', b.dataset.cols === '2'));
      specimenText.style.columnCount = 2;

      tierButtons.forEach(b => b.classList.toggle('active', b.dataset.tier === 'tier-2'));
      currentTier = 'tier-2';

      currentNikud = true;
      if (toggleNikud) toggleNikud.classList.add('active');

      if (toggleBaseline) {
        toggleBaseline.classList.remove('active');
        specimenPage.classList.remove('show-baseline');
      }

      renderText();
    });
  }

  // Initial render
  renderText();
});

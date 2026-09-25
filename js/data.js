/* All bilingual content lives here. Edit text freely. kn = Kannada, en = English */

/* ---- SWITCHES ----
   Turn sections on/off here. true = visible on the site, false = hidden (nav link + section both disappear).
   Nothing else needs to change when you flip these. */
const SETTINGS = {
  showGallery: true,
  showWinners: false
};

const UI = {
  kn: {
    nav_about:"ಕಾರ್ಯಕ್ರಮ", nav_comp:"ಸ್ಪರ್ಧೆಗಳು", nav_gallery:"ಗ್ಯಾಲರಿ", nav_reels:"ರೀಲ್ಸ್", nav_rules:"ನಿಯಮಗಳು", nav_winners:"ವಿಜೇತರು", nav_contact:"ಸಂಪರ್ಕ",
    org:"ಶ್ರೀ ಅಖಿಲ ಹವ್ಯಕ ಮಹಾಸಭಾ (ರಿ)", region:"ಬೆಂಗಳೂರು ಪ್ರಾಂತ್ಯ",
    tagline:"ಹವ್ಯಕ ಪ್ರತಿಭೆಗಳಿಗಾಗಿ ನಡೆಯುವ ಸ್ಪರ್ಧಾ ಸೌರಭ",
    hero_sub:"ಹವ್ಯಕ ಪ್ರತಿಭೆಗಳಿಗೊಂದು ಸದವಕಾಶ, ಎಲ್ಲ ವಯೋಮಾನದವರಿಗೂ ಸಮಾನ ವೇದಿಕೆ.",
    btn_comp:"ಸ್ಪರ್ಧೆಗಳನ್ನು ನೋಡಿ", btn_call:"ಕರೆ ಮಾಡಿ",
    when:"ದಿನಾಂಕ", when_v:"04 ಅಕ್ಟೋಬರ್ 2026", when_s:"ಭಾನುವಾರ",
    time:"ಸಮಯ", time_v:"ಬೆಳಿಗ್ಗೆ 9.30 ರಿಂದ ಸಂಜೆ 7 ರವರೆಗೆ",
    where:"ಸ್ಥಳ", where_v:"ಹವ್ಯಕ ಭವನ", where_s:"ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು",
    deadline:"ಹೆಸರು ನೋಂದಾಯಿಸಲು ಕೊನೆಯ ದಿನಾಂಕ", deadline_v:"02 ಅಕ್ಟೋಬರ್ 2026",
    comp_t:"ಸ್ಪರ್ಧಾ ಸೌರಭ", comp_s:"ನಿಮ್ಮ ವಯೋಮಿತಿಯನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    gallery_t:"ಚಿತ್ರಗಳು", gallery_s:"ಬದಿಗೆ ಸರಿಸಿ ನೋಡಿ.",
    reels_t:"ಕಂಟೆಂಟ್ ಕ್ರಿಯೇಟರ್‌ಗಳಿಗೊಂದು ಸುವರ್ಣಾವಕಾಶ", reels_s:"ಭಾಗವಹಿಸಿ, ನಿಮ್ಮ ಸೃಜನಶೀಲತೆ ತೋರಿಸಿ, ಆಕರ್ಷಕ ಬಹುಮಾನ ಗೆಲ್ಲಿ.",
    reels_only:"ಹವ್ಯಕ ಕಂಟೆಂಟ್ ಕ್ರಿಯೇಟರ್‌ಗಳಿಗೆ ಮಾತ್ರ.", reels_h:"ರೀಲ್ಸ್ ನಿಬಂಧನೆಗಳು", reels_note:"ವಿ. ಸೂ.: ಕೇವಲ ವೀಕ್ಷಣೆಯ ಸಂಖ್ಯೆ ಮಾತ್ರ ನಿರ್ಣಯಕ್ಕೆ ಮಾನದಂಡವಲ್ಲ.",
    rules_t:"ನಿಯಮ-ನಿಬಂಧನೆಗಳು", team:"ಸಂಘಟಕರು", team_s:"ಆಡಳಿತ ಮಂಡಳಿ ಮತ್ತು ಕಾರ್ಯಕಾರಿ ಸಮಿತಿ ಸದಸ್ಯರು",
    winners_t:"ವಿಜೇತರು", winners_s:"ವಿಭಾಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.", winners_empty:"ಫಲಿತಾಂಶ ಶೀಘ್ರದಲ್ಲೇ ಪ್ರಕಟವಾಗುವುದು.",
    contact_t:"ಸಂಪರ್ಕ", contact_s:"ಪ್ರಶ್ನೆಗಳಿವೆಯೇ? ಕರೆ ಮಾಡಿ.", reels_send:"ರೀಲ್ ಲಿಂಕ್ ಕಳುಹಿಸಲು",
    welcome:"ಸರ್ವರಿಗೂ ಆದರದ ಸ್ವಾಗತ", address:"# 101/ಎ, 11ನೆಯ ಅಡ್ಡರಸ್ತೆ, 8ನೆಯ ಮುಖ್ಯರಸ್ತೆ, ಮಲ್ಲೇಶ್ವರಂ, ಬೆಂಗಳೂರು – 560 003",
    open:"ಮೆನು", scroll_l:"ಹಿಂದೆ", scroll_r:"ಮುಂದೆ"
  },
  en: {
    nav_about:"Event", nav_comp:"Competitions", nav_gallery:"Gallery", nav_reels:"Reels", nav_rules:"Rules", nav_winners:"Winners", nav_contact:"Contact",
    org:"Shri Akhila Havyaka Mahasabha (R)", region:"Bengaluru Region",
    tagline:"A festival of competitions for Havyaka talent",
    hero_sub:"A stage for Havyaka talent, with competitions for every age group.",
    btn_comp:"Explore competitions", btn_call:"Call us",
    when:"Date", when_v:"4 October 2026", when_s:"Sunday",
    time:"Time", time_v:"9:30 AM to 7:00 PM",
    where:"Venue", where_v:"Havyaka Bhavana", where_s:"Malleshwaram, Bengaluru",
    deadline:"Last date to register", deadline_v:"2 October 2026",
    comp_t:"Spardha Saurabha", comp_s:"Choose your age group.",
    gallery_t:"Gallery", gallery_s:"Swipe to explore.",
    reels_t:"A golden opportunity for content creators", reels_s:"Take part, show your creativity and win attractive prizes.",
    reels_only:"Only for Havyaka content creators.", reels_h:"Reel guidelines", reels_note:"Note: view count alone is not a criterion for judging.",
    rules_t:"Rules and regulations", team:"Organisers", team_s:"Governing Council and Executive Committee Members",
    winners_t:"Winners", winners_s:"Choose a category.", winners_empty:"Results will be posted here soon.",
    contact_t:"Contact", contact_s:"Questions? Give us a call.", reels_send:"To send your reel link",
    welcome:"Everyone is warmly welcome", address:"#101/B, 11th Cross, 8th Main, Malleshwaram, Bengaluru – 560 003",
    open:"Menu", scroll_l:"Previous", scroll_r:"Next"
  }
};

/* Each competition item can optionally take a "loc" field to show a room/hall note under it, e.g.:
   {kn:"ಛದ್ಮವೇಷ",en:"Fancy dress",t:{kn:"2 ನಿಮಿಷ",en:"2 min"},loc:{kn:"2ನೇ ಮಹಡಿ, ಮಿನಿ ಹಾಲ್",en:"2nd floor, Mini Hall"}}
   Leave "loc" out entirely (as below) and nothing extra shows up. */
const GROUPS = [
 { id:"u6", tab:{kn:"6 ವರ್ಷದ ಒಳಗೆ",en:"Under 6"}, img:"under-6.webp",
   items:[
    {kn:"ಶ್ಲೋಕ ಪಠಣ",en:"Shloka recitation",t:{kn:"3 ನಿಮಿಷ",en:"3 min"}},
    {kn:"ಛದ್ಮವೇಷ",en:"Fancy dress",t:{kn:"2 ನಿಮಿಷ",en:"2 min"},loc:{kn:"2ನೇ ಮಹಡಿ, ಮಿನಿ ಹಾಲ್",en:"2nd floor, Mini Hall"}},
    {kn:"ಬಣ್ಣ ತುಂಬುವುದು",en:"Colour filling",t:{kn:"1 ತಾಸು",en:"1 hour"}}],
   note:{kn:"ಛದ್ಮವೇಷ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಮಾತಿಗೆ ಅವಕಾಶವಿರುವುದಿಲ್ಲ. ವೇಷಭೂಷಣಕ್ಕೆ ಆದ್ಯತೆ. ಅಭಿನಯಕ್ಕೆ ಅವಕಾಶವಿದೆ.",en:"No speaking in the fancy dress round. Costume is given priority; acting is allowed."}},
 { id:"a7", tab:{kn:"7 ರಿಂದ 12 ವರ್ಷ",en:"7 to 12 years"}, img:"age-7-12.webp",
   items:[
    {kn:"ಭಗವದ್ಗೀತಾ ಕಂಠಪಾಠ (2ನೇ ಅಧ್ಯಾಯ)",en:"Bhagavad Gita recitation (Chapter 2)",t:{kn:"3 ನಿಮಿಷ",en:"3 min"}},
    {kn:"ಚಿತ್ರಕಲೆ (ಹವ್ಯಕರ ಗ್ರಾಮೀಣ ಬದುಕು)",en:"Drawing (theme: Havyaka rural life)",t:{kn:"1 ತಾಸು",en:"1 hour"}},
    {kn:"ಏಕಪಾತ್ರಾಭಿನಯ",en:"Solo acting",t:{kn:"4 ನಿಮಿಷ",en:"4 min"}}],
   note:{kn:"ಚಿತ್ರಕಲೆಗೆ ಡ್ರಾಯಿಂಗ್ ಶೀಟ್ ನೀಡಲಾಗುವುದು. ಬಣ್ಣ ಇನ್ನಿತರ ಸಾಮಗ್ರಿಗಳನ್ನು ಸ್ಪರ್ಧಾರ್ಥಿಗಳೇ ತರಬೇಕು.",en:"A drawing sheet will be provided. Participants must bring their own colours and other materials."}},
 { id:"a12", tab:{kn:"12 ರಿಂದ 18 ವರ್ಷ",en:"12 to 18 years"}, img:"age-12-18.webp",
   items:[
    {kn:"ರಸಪ್ರಶ್ನೆ: ರಾಮಾಯಣ, ಮಹಾಭಾರತ ಮತ್ತು ಸಾಮಾನ್ಯ ಜ್ಞಾನ",en:"Quiz: Ramayana, Mahabharata and general knowledge",t:{kn:"ಎರಡು ಜನರ ತಂಡ",en:"Team of 2"}},
    {kn:"ಆಶುಭಾಷಣ",en:"Extempore speech",t:{kn:"3 ನಿಮಿಷ",en:"3 min"}},
    {kn:"ದೇಶಭಕ್ತಿಗೀತೆ",en:"Patriotic song",t:{kn:"4 ನಿಮಿಷ",en:"4 min"}},
    {kn:"ಚರ್ಚಾಸ್ಪರ್ಧೆ: ಗ್ರಾಮೀಣ ಪ್ರದೇಶದಲ್ಲಿ ಹವ್ಯಕರ ಸ್ವ ಉದ್ಯಮ ಸಾಧ್ಯವೇ?",en:"Debate: Is self-entrepreneurship possible for Havyakas in rural areas?",t:{kn:"4 ನಿಮಿಷ",en:"4 min"}}],
   note:null},
 { id:"gen", tab:{kn:"ಸಾಮಾನ್ಯ ವಿಭಾಗ (18+)",en:"General (18+)"}, img:"general.webp",
   items:[
    {kn:"ಹವ್ಯಕ ಸಂಪ್ರದಾಯ ಗೀತೆ (ಕನಿಷ್ಠ 3, ಗರಿಷ್ಠ 5 ಜನರ ತಂಡ)",en:"Havyaka traditional song (team of 3 to 5)",t:{kn:"5 ನಿಮಿಷ",en:"5 min"}},
    {kn:"ರಂಗೋಲಿ (ಚುಕ್ಕಿ)",en:"Rangoli (dotted)",t:{kn:"1.5 ತಾಸು",en:"1.5 hours"}},
    {kn:"ಜಾನಪದ ಗೀತೆ (ಸೋಲೋ)",en:"Folk song (solo)",t:{kn:"4 ನಿಮಿಷ",en:"4 min"}},
    {kn:"ಹವಿಗನ್ನಡ ಆಶುಭಾಷಣ",en:"Extempore speech in Havigannada",t:{kn:"3 ನಿಮಿಷ",en:"3 min"}},
    {kn:"ಹವಿರುಚಿ: ಹಲ್ವಾ / ಮಣ್ಣಿ",en:"Havyaka cuisine: Halwa / Manni",t:{kn:"ಮನೆಯಿಂದ ತನ್ನಿ",en:"Bring from home"}},
    {kn:"ಕರಕುಶಲ ವಸ್ತು ಪ್ರದರ್ಶನ (ಒಬ್ಬರು ಹಲವು ವಸ್ತುಗಳನ್ನು ಪ್ರದರ್ಶಿಸಬಹುದು)",en:"Handicraft exhibition (one may display several items)",t:{kn:"ಪ್ರದರ್ಶನ",en:"Exhibit"}}],
   note:{kn:"ಸಾಮಾನ್ಯ ವಿಭಾಗದಲ್ಲಿ ಒಬ್ಬರು ಮೂರು ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಮಾತ್ರ ಭಾಗವಹಿಸಬಹುದು.",en:"In the General category, one person may take part in only three competitions."}}
];

const TALENT = {
  t:{kn:"ಪ್ರತಿಭಾ ಪ್ರದರ್ಶನ",en:"Talent showcase"},
  p:{kn:"ಮೇಲಿನ ಸ್ಪರ್ಧೆಗಳನ್ನು ಹೊರತುಪಡಿಸಿ ಬೇರೆ ಯಾವುದೇ ಪ್ರತಿಭೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸಬಹುದು. ಉದಾಹರಣೆ: ಯಕ್ಷ ನೃತ್ಯ, ಭರತನಾಟ್ಯ, ಸಂಗೀತ ವಾದ್ಯಗಳ ನುಡಿಸುವಿಕೆ, ವಿಶಿಷ್ಟ ಚಿತ್ರ ರಚನೆ, ಮಿಮಿಕ್ರಿ, ಜಾದೂ ಇತ್ಯಾದಿ. ಸಮಯ ಮಿತಿ 5 ನಿಮಿಷ.",
     en:"Show any talent not covered above. For example: Yaksha dance, Bharatanatyam, playing musical instruments, special art creation, mimicry, magic and more. Time limit: 5 minutes."},
  n:{kn:"ಎಲ್ಲಾ ವಯೋಮಿತಿಯವರು ಭಾಗವಹಿಸಬಹುದು. ಪ್ರತ್ಯೇಕ ವಯೋಮಿತಿ ವಿಭಾಗಗಳಿಲ್ಲ ಹಾಗೂ ತಂಡಗಳ ಪ್ರದರ್ಶನಕ್ಕೆ ಅವಕಾಶವಿಲ್ಲ.",
     en:"Open to all ages. There are no separate age categories, and team performances are not allowed."}
};

const RULES = [
 {kn:"ಹವ್ಯಕರಿಗೆ ಮಾತ್ರ ಅವಕಾಶ.",en:"Open to Havyakas only."},
 {kn:"ಪ್ರಾಂತ್ಯಮಟ್ಟದ ಪ್ರತಿಯೊಂದು ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಪ್ರಥಮ, ದ್ವಿತೀಯ ಮತ್ತು ತೃತೀಯ ಬಹುಮಾನವಿರುತ್ತದೆ.",en:"Every region-level competition has first, second and third prizes."},
 {kn:"ಭಗವದ್ಗೀತೆ, ರಸಪ್ರಶ್ನೆ, ಚರ್ಚಾಸ್ಪರ್ಧೆ, ಸಂಪ್ರದಾಯಗೀತೆ, ರಂಗೋಲಿ, ಜಾನಪದಗೀತೆ, ಹವಿಗನ್ನಡ ಆಶುಭಾಷಣ, ಕರಕುಶಲ ವಸ್ತು ಪ್ರದರ್ಶನ ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಪ್ರಥಮ ಮತ್ತು ದ್ವಿತೀಯ ಸ್ಥಾನ ಪಡೆದ ಸ್ಪರ್ಧಿಗಳನ್ನು ಬೆಂಗಳೂರಿನಲ್ಲಿ ನಡೆಯುವ ಪ್ರತಿಬಿಂಬ ಗ್ರ್ಯಾಂಡ್ ಫಿನಾಲೆಗೆ ಆಯ್ಕೆ ಮಾಡಲಾಗುವುದು.",
  en:"Participants placing first and second in Bhagavad Gita, quiz, debate, traditional song, rangoli, folk song, Havigannada extempore and handicraft exhibition are selected for the Pratibimba Grand Finale in Bengaluru."},
 {kn:"ಛದ್ಮವೇಷ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಮಾತಿಗೆ ಅವಕಾಶವಿರುವುದಿಲ್ಲ. ವೇಷಭೂಷಣಕ್ಕೆ ಆದ್ಯತೆ. ಅಭಿನಯಕ್ಕೆ ಅವಕಾಶವಿದೆ.",en:"No speaking in fancy dress. Costume gets priority; acting is allowed."},
 {kn:"ಚಿತ್ರಕಲೆಗೆ ಡ್ರಾಯಿಂಗ್ ಶೀಟ್ ನೀಡಲಾಗುವುದು. ಬಣ್ಣ ಇನ್ನಿತರ ಸಾಮಗ್ರಿಗಳನ್ನು ಸ್ಪರ್ಧಿಗಳೇ ತರಬೇಕು.",en:"A drawing sheet is provided. Participants bring colours and other materials."},
 {kn:"ರಸಪ್ರಶ್ನೆಗೆ ಪ್ರತಿ ತಂಡದಲ್ಲಿ 2 ಸದಸ್ಯರು ಕಡ್ಡಾಯ.",en:"Each quiz team must have exactly 2 members."},
 {kn:"ಸಾಮಾನ್ಯ ವಿಭಾಗದ ಆರು ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಯಾವುದಾದರೂ ಮೂರು ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಮಾತ್ರ ಭಾಗವಹಿಸಲು ಅವಕಾಶವಿರುತ್ತದೆ.",en:"In the General category, you may take part in any three of the six competitions."},
 {kn:"ಸಂಪ್ರದಾಯಗೀತೆಗೆ ಪ್ರತಿ ತಂಡದಲ್ಲಿ ಕನಿಷ್ಠ 3 ಜನ, ಗರಿಷ್ಠ 5 ಜನ ಸದಸ್ಯರು ಇರಬಹುದು.",en:"A traditional song team can have 3 to 5 members."},
 {kn:"ರಂಗೋಲಿ ಸ್ಪರ್ಧೆಗೆ ರಂಗೋಲಿ ಮತ್ತು ಬಣ್ಣವನ್ನು ಸ್ಪರ್ಧಿಗಳೇ ತರಬೇಕು. ರಂಗೋಲಿ ಹಾಕಲು ಮತ್ತು ಬಣ್ಣ ತುಂಬಲು ಸಲಕರಣೆಗಳನ್ನು ಉಪಯೋಗಿಸುವಂತಿಲ್ಲ. ರಂಗೋಲಿ ಅಳತೆ 2 x 2 ಅಡಿ ಮೀರುವಂತಿಲ್ಲ.",en:"Rangoli powder and colours are brought by participants. No tools may be used to draw or fill. Rangoli size must not exceed 2 x 2 feet."},
 {kn:"ಕರಕುಶಲ ವಸ್ತು ಮತ್ತು ಹವಿರುಚಿ (ಹಲ್ವಾ/ಮಣ್ಣಿ)ಯನ್ನು ಮನೆಯಿಂದ ಮಾಡಿ ತರಬೇಕು.",en:"Handicrafts and Havyaka cuisine (Halwa/Manni) must be made at home and brought."},
 {kn:"ಹವಿರುಚಿಗೆ ಬಳಸಿದ ಸಾಮಗ್ರಿಗಳು ಮತ್ತು ಮಾಡುವ ವಿಧಾನವನ್ನು ಬರೆದು ತರಬೇಕು.",en:"Write down the ingredients and method used for the cuisine and bring it along."},
 {kn:"ಆಯೋಜಕರ ತೀರ್ಮಾನವೇ ಅಂತಿಮ.",en:"The organisers' decision is final."}
];

const REEL_RULES = [
 {kn:"ಕಡ್ಡಾಯವಾಗಿ ಹವ್ಯಕರಾಗಿರಬೇಕು.",en:"You must be a Havyaka."},
 {kn:"ಕಂಟೆಂಟ್ ನಲ್ಲಿ ಹವ್ಯಕ ಕನ್ನಡ ಬಳಸುವುದಕ್ಕೆ ಆದ್ಯತೆ.",en:"Priority for using Havyaka Kannada in the content."},
 {kn:"ನಿಮ್ಮ ರೀಲ್ / ವಿಡಿಯೋ ಒಂದು ನಿಮಿಷಕ್ಕಿಂತ ಹೆಚ್ಚಿರಬಾರದು.",en:"Your reel or video must not exceed one minute."},
 {kn:"ಹವ್ಯಕ ಮಹಾಸಭೆಯ ಅಧಿಕೃತ ಜಾಲತಾಣ ಪುಟವನ್ನು ಟ್ಯಾಗ್ ಮಾಡಬೇಕು.",en:"Tag the official social media page of Havyaka Mahasabha."},
 {kn:"ಸೃಜನಾತ್ಮಕತೆ, ಕವರೇಜ್, ಶೈಲಿ ಹಾಗೂ ವೀಕ್ಷಣೆಯನ್ನು ಪರಿಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳಲಾಗುವುದು.",en:"Creativity, coverage, style and views will be considered."},
 {kn:"ಅಕ್ಟೋಬರ್ 4ರ ಸಂಜೆಯಿಂದ ಅಕ್ಟೋಬರ್ 5ನೇ ತಾರೀಖಿನ ಸಂಜೆಯ ತನಕ ಪೋಸ್ಟಿಗೆ ಅವಕಾಶವಿರುತ್ತದೆ.",en:"Posting is allowed from the evening of 4 October to the evening of 5 October."},
 {kn:"ಒಂದು ಅಕೌಂಟ್ ನಿಂದ ಒಂದೇ ರೀಲ್ ಅನ್ನು ಗಣನೆಗೆ ತೆಗೆದುಕೊಳ್ಳಲಾಗುವುದು.",en:"Only one reel per account is counted."},
 {kn:"ಪ್ರತಿಬಿಂಬ ಗ್ರ್ಯಾಂಡ್ ಫಿನಾಲೆಯ ಎರಡು ದಿನ ಹಿಂದಿನವರೆಗೆ ನಿರ್ಣಯಕ್ಕೆ ತೆಗೆದುಕೊಳ್ಳಲಾಗುತ್ತದೆ.",en:"Entries are considered up to two days before the Pratibimba Grand Finale."},
 {kn:"ಪೋಸ್ಟ್ ಮಾಡಿದ ರೀಲ್ ಅನ್ನು ಅಧಿಕೃತ ಸಂಖ್ಯೆಗೆ ಲಿಂಕ್ ಕಳುಹಿಸಬೇಕು. (97407 45306 / 95352 46885)",en:"Send the link of your posted reel to the official numbers: 97407 45306 / 95352 46885."},
 {kn:"ಪೋಸ್ಟ್ ಮಾಡಿದ ಅಕೌಂಟ್ ಪಬ್ಲಿಕ್ ಆಗಿರಬೇಕು.",en:"The posting account must be public."},
 {kn:"ಯಾವುದೇ ರೀತಿಯ ರಾಜಕೀಯ, ಸಾಂಘಿಕ ಪ್ರತಿಫಲನ ಕಂಡುಬಂದಲ್ಲಿ ಅಂತಹ ರೀಲ್ ಅನ್ನು ಅನರ್ಹಗೊಳಿಸಲಾಗುವುದು.",en:"Reels showing any political or sectarian backlash will be disqualified."},
 {kn:"ಸಂಘಟಕರ ತೀರ್ಮಾನವೇ ಅಂತಿಮ.",en:"The organisers' decision is final."}
];

const PEOPLE = [
 {n:{kn:"ಹರ್ಷ ಹೆಗಡೆ ಕೊಂಡದಕುಳಿ",en:"Harsha Hegde Kondadakuli"},r:{kn:"ಸಂಚಾಲಕ, ಪ್ರತಿಬಿಂಬ ಬೆಂಗಳೂರು",en:"Convenor, Pratibimba Bengaluru"}},
 {n:{kn:"ದೀಪಕ ಹೆಗಡೆ ಗೋಳಿಕೈ",en:"Deepak Hegde Golikai"},r:{kn:"ಸಂಚಾಲಕ, ಪ್ರತಿಬಿಂಬ ಕೇಂದ್ರ",en:"Convenor, Pratibimba Kendra"}},
 {n:{kn:"ಸಿಎ. ವೇಣುವಿಘ್ನೇಶ ಸಂಪ",en:"CA. Venuvighnesha Sampa"},r:{kn:"ಪ್ರಧಾನ ಕಾರ್ಯದರ್ಶಿ",en:"General Secretary"}}
];

/* Add more pictures here: put the file in assets/gallery/ and add a line. */
const GALLERY = [
 {src:"title-details.webp",alt:{kn:"ಪ್ರತಿಬಿಂಬ ಬೆಂಗಳೂರು ಪ್ರಾಂತ್ಯ",en:"Pratibimba Bengaluru Region"}},
 {src:"poster.webp",alt:{kn:"ವಿಧಾನ ಸೌಧ ಪೋಸ್ಟರ್",en:"Event poster"}},
 {src:"under-6.webp",alt:{kn:"6 ವರ್ಷದ ಒಳಗೆ",en:"Under 6"}},
 {src:"age-7-12.webp",alt:{kn:"7 ರಿಂದ 12 ವರ್ಷ",en:"7 to 12 years"}},
 {src:"age-12-18.webp",alt:{kn:"12 ರಿಂದ 18 ವರ್ಷ",en:"12 to 18 years"}},
 {src:"general.webp",alt:{kn:"ಸಾಮಾನ್ಯ ವಿಭಾಗ",en:"General category"}},
 {src:"title-art.webp",alt:{kn:"ಪ್ರತಿಬಿಂಬ",en:"Pratibimba"}}
];

/* Winners: fill this in after the event and set SETTINGS.showWinners = true at the top of this file.
   One entry per age group (same order as GROUPS). Each competition can have 1st/2nd/3rd.
   To add a winner, add a line inside "ranks": {p:1,name:{kn:"ಹೆಸರು",en:"Name"}}
   Leave "ranks" as an empty array [] for a competition with no result yet — it will just say "coming soon". */
const WINNERS = [
 { tab:{kn:"6 ವರ್ಷದ ಒಳಗೆ",en:"Under 6"}, comps:[
    { name:{kn:"ಶ್ಲೋಕ ಪಠಣ",en:"Shloka recitation"}, ranks:[] },
    { name:{kn:"ಛದ್ಮವೇಷ",en:"Fancy dress"}, ranks:[] },
    { name:{kn:"ಬಣ್ಣ ತುಂಬುವುದು",en:"Colour filling"}, ranks:[] }
 ]},
 { tab:{kn:"7 ರಿಂದ 12 ವರ್ಷ",en:"7 to 12 years"}, comps:[
    { name:{kn:"ಭಗವದ್ಗೀತಾ ಕಂಠಪಾಠ",en:"Bhagavad Gita recitation"}, ranks:[] },
    { name:{kn:"ಚಿತ್ರಕಲೆ",en:"Drawing"}, ranks:[] },
    { name:{kn:"ಏಕಪಾತ್ರಾಭಿನಯ",en:"Solo acting"}, ranks:[] }
 ]},
 { tab:{kn:"12 ರಿಂದ 18 ವರ್ಷ",en:"12 to 18 years"}, comps:[
    { name:{kn:"ರಸಪ್ರಶ್ನೆ",en:"Quiz"}, ranks:[] },
    { name:{kn:"ಆಶುಭಾಷಣ",en:"Extempore speech"}, ranks:[] },
    { name:{kn:"ದೇಶಭಕ್ತಿಗೀತೆ",en:"Patriotic song"}, ranks:[] },
    { name:{kn:"ಚರ್ಚಾಸ್ಪರ್ಧೆ",en:"Debate"}, ranks:[] }
 ]},
 { tab:{kn:"ಸಾಮಾನ್ಯ ವಿಭಾಗ (18+)",en:"General (18+)"}, comps:[
    { name:{kn:"ಹವ್ಯಕ ಸಂಪ್ರದಾಯ ಗೀತೆ",en:"Havyaka traditional song"}, ranks:[] },
    { name:{kn:"ರಂಗೋಲಿ",en:"Rangoli"}, ranks:[] },
    { name:{kn:"ಜಾನಪದ ಗೀತೆ",en:"Folk song"}, ranks:[] },
    { name:{kn:"ಹವಿಗನ್ನಡ ಆಶುಭಾಷಣ",en:"Extempore speech in Havigannada"}, ranks:[] },
    { name:{kn:"ಕರಕುಶಲ ವಸ್ತು ಪ್ರದರ್ಶನ",en:"Handicraft exhibition"}, ranks:[] }
 ]}
];

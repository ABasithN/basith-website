/* =========================================================
   ELSEWHERE — first-pass prototype (3 lives, full flow)
   ========================================================= */

const LIVES = [
  {
    id: 'cafe', num: '01', name: 'Café Owner', rgb: '255,171,64', tag: 'Porto, Portugal',
    wide: true,
    transitionStyle: 'steam',
    ambientStyle: 'bokeh',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(30*s,70*s); ctx.lineTo(30*s,42*s);
      ctx.quadraticCurveTo(30*s,32*s,40*s,32*s);
      ctx.lineTo(60*s,32*s);
      ctx.quadraticCurveTo(70*s,32*s,70*s,42*s);
      ctx.lineTo(70*s,70*s);
      ctx.closePath(); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(42*s,30*s);
      ctx.quadraticCurveTo(48*s,16*s,56*s,26*s);
      ctx.stroke();
    },
    introHook: "Six o'clock. Every morning. For nine years.",
    bleed: 'You chose to open the door at six, every day, for people who never asked you to.',
    worldIntroTitle: 'Café Owner',
    artifactLabel: 'Counter Log 07',
    narrativeP1: 'You spent nine years opening at six, long before anyone else on the street was awake.',
    narrativeP2: 'At thirty-three, a regular you had served for six years finally told you why he came in daily. Not for the coffee, but because it was the one place that still remembered his order after his wife stopped. You never repeated it to anyone.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Café Owner",
      age: 33, place: 'Porto, Portugal',
      knownFor: "Remembering every regular's order, even after years away.",
      lifeLesson: 'The smallest kindness, repeated daily, outlasts almost everything else.',
      footer: 'Counter Log 07 · 41.1579°N, 8.6291°W · 2027'
    },
    realityMirror: 'Funny, you still make your own coffee here too. Just slower, and only for yourself.',
    milestones: [
      { age: 18, text: 'Failed the barista certification exam. Twice.' },
      { age: 24, text: 'Opened with a folding table and four mismatched chairs.' },
      { age: 29, text: 'The line started forming before the door even unlocked.' },
      { age: 33, text: 'Still makes the coffee slower, and only for one.' }
    ]
  },
  {
    id: 'supermodel', num: '02', name: 'Supermodel', rgb: '255,214,214', tag: 'Paris, France',
    wide: false,
    transitionStyle: 'flash',
    ambientStyle: 'sparkle',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(20*s,82*s);
      ctx.bezierCurveTo(30*s,42*s,70*s,42*s,80*s,18*s);
      ctx.stroke();
      ctx.lineWidth = 1.5 * s;
      ctx.beginPath();
      ctx.moveTo(24*s,22*s); ctx.lineTo(24*s,34*s);
      ctx.moveTo(18*s,28*s); ctx.lineTo(30*s,28*s);
      ctx.stroke();
    },
    introHook: 'Six years. More magazine covers than she can count.',
    bleed: 'You chose a job where being looked at never once felt like being seen.',
    worldIntroTitle: 'Supermodel',
    artifactLabel: 'Cover Log 07',
    narrativeP1: 'You spent six years being photographed by people who never learned your last name.',
    narrativeP2: 'At twenty-four, backstage before the biggest show of the year, you asked the newest model in the lineup if she was nervous. She said yes. You never told her you still were too, every single time.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Supermodel",
      age: 24, place: 'Paris, France',
      knownFor: 'The campaign that ended up on the side of a building in Times Square.',
      lifeLesson: 'Being looked at and being seen are not the same thing, and only one of them feeds you.',
      footer: 'Cover Log 07 · 48.8566°N, 2.3522°E · 2027'
    },
    realityMirror: 'You still check the mirror twice before walking into any room that matters.',
    milestones: [
      { age: 18, text: 'Told by the first agency she was almost right. Signed by the second.' },
      { age: 20, text: 'First cover. Misspelled name in the credits.' },
      { age: 22, text: 'Walked eleven shows in nine days. Slept on four flights.' },
      { age: 24, text: 'The campaign that ended up on the side of a building in Times Square.' }
    ]
  },
  {
    id: 'architect', num: '03', name: 'Architect', rgb: '255,45,149', tag: 'Copenhagen, Denmark',
    wide: false,
    transitionStyle: 'grid',
    ambientStyle: 'blueprint',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(15*s,55*s); ctx.lineTo(50*s,20*s); ctx.lineTo(85*s,55*s);
      ctx.stroke();
      ctx.lineWidth = 1.5 * s;
      ctx.strokeRect(28*s,55*s,14*s,20*s);
      ctx.strokeRect(45*s,55*s,10*s,20*s);
      ctx.strokeRect(58*s,55*s,14*s,20*s);
    },
    introHook: 'Eleven years of windows nobody asked for.',
    bleed: 'You chose to argue for windows nobody thought they needed.',
    worldIntroTitle: 'Architect',
    artifactLabel: 'Build Log 07',
    narrativeP1: 'You spent eleven years arguing for windows nobody thought they needed.',
    narrativeP2: 'At thirty-eight, walking past the library you designed, you watched a stranger stop just to look up at the light hitting the atrium. No photo, nothing to gain. You never told him you built it.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm an Architect",
      age: 38, place: 'Copenhagen, Denmark',
      knownFor: 'A library the whole city points to when giving directions.',
      lifeLesson: 'Build for the people who will never know your name.',
      footer: 'Build Log 07 · 55.6761°N, 12.5683°E · 2029'
    },
    realityMirror: 'You still stop, sometimes, just to look up at a ceiling done right.',
    milestones: [
      { age: 19, text: 'Nearly expelled for redesigning the studio without asking.' },
      { age: 26, text: 'First building rejected by the city panel. Twice.' },
      { age: 34, text: 'Won an award for a house nobody actually wanted to live in.' },
      { age: 38, text: 'A library the whole city points to when giving directions.' }
    ]
  },
  {
    id: 'rockstar', num: '04', name: 'Rockstar', rgb: '123,0,255', tag: 'Wembley, London',
    wide: true,
    transitionStyle: 'pulse',
    ambientStyle: 'pulse',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 3 * s;
      ctx.beginPath();
      ctx.moveTo(60*s,10*s); ctx.lineTo(35*s,50*s); ctx.lineTo(50*s,50*s); ctx.lineTo(25*s,90*s);
      ctx.stroke();
    },
    introHook: 'Fifty thousand people. Singing words you wrote alone at two a.m.',
    bleed: "You chose to turn a bedroom song into a stadium's.",
    worldIntroTitle: 'Rockstar',
    artifactLabel: 'Set List 07',
    narrativeP1: 'You spent nine years playing rooms that got bigger every single tour.',
    narrativeP2: 'At thirty-three, mid-song, the entire stadium sang the bridge back to you louder than the amps. You stopped playing for four seconds just to hear it. Nobody noticed. You will never forget it.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Rockstar",
      age: 33, place: 'Wembley, London',
      knownFor: 'The night fifty thousand people sang the bridge louder than the band.',
      lifeLesson: "The song stops being yours the moment it's good enough to become everyone else's.",
      footer: 'Set List 07 · 51.5560°N, 0.2795°W · 2030'
    },
    realityMirror: 'You still hum unfinished songs under your breath, in rooms with terrible acoustics.',
    milestones: [
      { age: 17, text: 'Banned from the school talent show for excessive volume.' },
      { age: 21, text: 'First gig. Paid in pizza and petrol money.' },
      { age: 27, text: 'First arena show. Threw up before, killed it after.' },
      { age: 33, text: 'Fifty thousand people singing the bridge louder than the band.' }
    ]
  },
  {
    id: 'pilot', num: '05', name: 'Long-Haul Pilot', rgb: '64,169,255', tag: 'Based in Singapore',
    wide: false,
    transitionStyle: 'cloud',
    ambientStyle: 'clouds',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(10*s,60*s); ctx.lineTo(90*s,60*s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(18*s,63*s);
      ctx.lineTo(82*s,48*s);
      ctx.lineTo(58*s,56*s);
      ctx.lineTo(48*s,78*s);
      ctx.closePath();
      ctx.stroke();
    },
    introHook: 'Thirteen years. Measured in time zones, not years.',
    bleed: 'You chose to cross the sky for a living, and somehow never got used to it.',
    worldIntroTitle: 'Long-Haul Pilot',
    artifactLabel: 'Flight Log 07',
    narrativeP1: 'You spent thirteen years measuring your life in time zones instead of years.',
    narrativeP2: 'At thirty-six, somewhere over Greenland, a passenger tapped your co-pilot\u2019s shoulder just to say the sunrise that morning was the most beautiful thing they had ever seen. You never went out to tell them you had seen four thousand of them.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Pilot",
      age: 36, place: 'Based in Singapore',
      knownFor: 'The smoothest landing passengers still mention years later.',
      lifeLesson: 'The view is only extraordinary if you remember to look up from the instruments.',
      footer: 'Flight Log 07 · 1.3521°N, 103.8198°E · 2028'
    },
    realityMirror: 'You still watch the sky change color, even from a window nowhere near 38,000 feet.',
    milestones: [
      { age: 19, text: 'Failed the written exam. Passed the retake by one question.' },
      { age: 23, text: 'First solo flight nearly ended in a very memorable landing.' },
      { age: 30, text: 'Logged more hours awake at altitude than asleep on the ground.' },
      { age: 36, text: 'A landing passengers still mention, years later.' }
    ]
  },
  {
    id: 'actor', num: '06', name: 'Film Actor', rgb: '255,196,0', tag: 'Los Angeles, USA',
    wide: false,
    transitionStyle: 'curtain',
    ambientStyle: 'stagelight',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.arc(50*s,50*s,35*s,0,Math.PI*2);
      ctx.stroke();
      ctx.lineWidth = 1.5 * s;
      [0,90,180,270].forEach(a => {
        const rad = a * Math.PI/180;
        const x = 50*s + Math.cos(rad)*35*s;
        const y = 50*s + Math.sin(rad)*35*s;
        ctx.beginPath(); ctx.arc(x,y,4*s,0,Math.PI*2); ctx.stroke();
      });
    },
    introHook: 'Twelve people who never existed. All of them, briefly, you.',
    bleed: 'You chose to become other people for a living, and somehow stayed yourself.',
    worldIntroTitle: 'Film Actor',
    artifactLabel: 'Take Log 07',
    narrativeP1: 'You spent sixteen years playing twelve people who never existed outside a script.',
    narrativeP2: 'At forty-one, between takes on your hardest role, you forgot for a moment which grief was the character\u2019s and which was yours from that year. You never told the director. You did not need to.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Film Actor",
      age: 41, place: 'Los Angeles, USA',
      knownFor: 'The role critics said would win every award that year.',
      lifeLesson: 'The best performances cost you something real, every time, on purpose.',
      footer: 'Take Log 07 · 34.0522°N, 118.2437°W · 2031'
    },
    realityMirror: "You still catch yourself trying on other people's posture in a crowded room.",
    milestones: [
      { age: 19, text: 'Rejected from drama school. Reapplied. Rejected again.' },
      { age: 24, text: 'First real role. Four lines. Cut to two in the final edit.' },
      { age: 32, text: 'First lead role. Forgot every line on day one.' },
      { age: 41, text: 'The role critics said would win every award that year.' }
    ]
  },
  {
    id: 'f1', num: '07', name: 'Formula 1 Racer', rgb: '255,23,68', tag: 'Monza, Italy',
    wide: true,
    transitionStyle: 'streak',
    ambientStyle: 'streaks',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 3 * s;
      ctx.beginPath();
      ctx.moveTo(10*s,85*s);
      ctx.quadraticCurveTo(35*s,20*s,90*s,15*s);
      ctx.stroke();
    },
    introHook: 'Eleven seasons. Two hundred miles an hour of decisions.',
    bleed: 'You chose the world that forgives no hesitation.',
    worldIntroTitle: 'Formula 1 Racer',
    artifactLabel: 'Race Sheet 07',
    narrativeP1: 'You spent eleven seasons trusting a body that failed differently every year.',
    narrativeP2: 'At twenty-nine, on a wet lap at Spa, you lifted for half a second no one else would have. The car behind you did not. He did not finish the race. You never told him you saw it coming.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Formula 1 Racer",
      age: 29, place: 'Monza, Italy',
      knownFor: 'The closest podium finish the sport had seen in a decade.',
      lifeLesson: "Composure isn't given to people. They build it, corner by corner.",
      footer: 'Race Sheet 07 · 45.6156°N, 9.2811°E · 2029'
    },
    realityMirror: 'You still notice the exact moment to ease off, even in traffic that means nothing.',
    milestones: [
      { age: 17, text: 'Banned from the go-kart track for overtaking on a blind corner. On purpose.' },
      { age: 21, text: 'First contract. Crashed out on lap one of the first race.' },
      { age: 26, text: 'First podium, after four seasons of nearly.' },
      { age: 29, text: 'The closest podium finish the sport had seen in a decade.' }
    ]
  },
  {
    id: 'novelist', num: '08', name: 'Bestselling Novelist', rgb: '40,90,255', tag: 'New York City, USA',
    wide: false,
    transitionStyle: 'pageturn',
    ambientStyle: 'pages',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(15*s,70*s); ctx.quadraticCurveTo(50*s,55*s,85*s,70*s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(15*s,70*s); ctx.lineTo(15*s,28*s); ctx.quadraticCurveTo(50*s,42*s,50*s,28*s);
      ctx.moveTo(50*s,28*s); ctx.quadraticCurveTo(50*s,42*s,85*s,28*s); ctx.lineTo(85*s,70*s);
      ctx.stroke();
    },
    introHook: 'Eleven months to write. A decade of strangers rereading it.',
    bleed: 'You chose to say the true thing by making it up entirely.',
    worldIntroTitle: 'Bestselling Novelist',
    artifactLabel: 'Draft Log 07',
    narrativeP1: 'You spent eleven months writing the book, and four years not writing the ones before it.',
    narrativeP2: 'At thirty-nine, a stranger at a signing told you the book got her through the worst year of her life. You signed her copy and said thank you. You cried in the car, not at the table, because some things are only yours.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Novelist",
      age: 39, place: 'New York City, USA',
      knownFor: 'A book strangers have been rereading for a decade.',
      lifeLesson: 'The stories that help people are rarely the ones you were sure would.',
      footer: 'Draft Log 07 · 40.7128°N, 74.0060°W · 2029'
    },
    realityMirror: "You still write down good lines from strangers, out of habit, even when there's no book waiting.",
    milestones: [
      { age: 22, text: 'First manuscript. Rejected by thirty-one publishers.' },
      { age: 28, text: 'Second manuscript. Rejected by nineteen.' },
      { age: 34, text: 'Third manuscript. Nearly did not send it either.' },
      { age: 39, text: 'A book strangers have been rereading for a decade.' }
    ]
  },
  {
    id: 'jazz', num: '09', name: 'Jazz Pianist', rgb: '176,84,255', tag: 'New Orleans, USA',
    wide: false,
    transitionStyle: 'smoke',
    ambientStyle: 'smoke',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(15*s,75*s);
      ctx.quadraticCurveTo(50*s,88*s,85*s,60*s);
      ctx.quadraticCurveTo(68*s,38*s,38*s,44*s);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(64*s,25*s); ctx.lineTo(64*s,42*s);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(61*s,44*s,3.2*s,0,Math.PI*2);
      ctx.fill();
    },
    introHook: 'Eight years. One slot. One night a week that mattered.',
    bleed: 'You chose a room small enough that silence was part of the music.',
    worldIntroTitle: 'Jazz Pianist',
    artifactLabel: 'Set Log 07',
    narrativeP1: 'You spent eight years playing the same Tuesday slot until Tuesday became the reason people planned their week.',
    narrativeP2: 'At thirty-one, mid-solo, you looked up and realized every regular in the room had closed their eyes at the exact same bar. You never mentioned it, not even to the drummer.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Jazz Pianist",
      age: 31, place: 'New Orleans, USA',
      knownFor: 'A Tuesday residency that outgrew its own room.',
      lifeLesson: 'The audience that finds you slowly is the one that stays.',
      footer: 'Set Log 07 · 29.9511°N, 90.0715°W · 2027'
    },
    realityMirror: 'You still know exactly when to leave a silence alone.',
    milestones: [
      { age: 16, text: 'Kicked out of the school choir for improvising during the hymn.' },
      { age: 22, text: 'Played to an empty room. Kept playing anyway.' },
      { age: 27, text: 'Tuesdays started selling out. Nobody knows exactly when.' },
      { age: 31, text: 'A residency that outgrew its own room.' }
    ]
  },
  {
    id: 'olympian', num: '10', name: 'Olympic Gold Medalist', rgb: '255,153,0', tag: 'Paris, France',
    wide: true,
    transitionStyle: 'burst',
    ambientStyle: 'confetti',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.arc(50*s,35*s,14*s,0,Math.PI*2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(40*s,47*s); ctx.lineTo(30*s,85*s);
      ctx.moveTo(60*s,47*s); ctx.lineTo(70*s,85*s);
      ctx.stroke();
    },
    introHook: 'Four years of training. Nine point eight seconds to show for it.',
    bleed: 'You chose a sport where a single afternoon decided everything.',
    worldIntroTitle: 'Olympic Gold Medalist',
    artifactLabel: 'Heat Log 07',
    narrativeP1: 'You spent four years training for a race that lasted under ten seconds.',
    narrativeP2: 'At twenty-six, in the last stride, you did not know you had won until you saw the replay. Your first thought was not pride. It was your coach, who missed the race, stuck in traffic outside the stadium. You called him before anyone else.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Gold Medalist",
      age: 26, place: 'Paris, France',
      knownFor: 'Gold, by four hundredths of a second, on a track built for exactly this.',
      lifeLesson: 'Four years can come down to four hundredths of a second, and somehow that\u2019s fair.',
      footer: 'Heat Log 07 · 48.8566°N, 2.3522°E · 2028'
    },
    realityMirror: 'You still tense your legs at the sound of a starting gun in any context, including microwaves.',
    milestones: [
      { age: 16, text: 'Came last in the district trials. Kept training anyway.' },
      { age: 20, text: 'First national title, after missing the podium two years running.' },
      { age: 24, text: 'First Olympics. Eliminated in the semifinal.' },
      { age: 26, text: 'Gold, by four hundredths of a second.' }
    ]
  },
  {
    id: 'creator', num: '11', name: 'Content Creator', rgb: '179,255,79', tag: 'No fixed address',
    wide: false,
    transitionStyle: 'glitch',
    ambientStyle: 'glow',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(15*s,30*s); ctx.lineTo(15*s,70*s); ctx.lineTo(75*s,50*s);
      ctx.closePath();
      ctx.stroke();
    },
    introHook: 'Six years explaining the thing nobody else would say twice.',
    bleed: 'You chose to be patient, in public, for strangers you would never meet.',
    worldIntroTitle: 'Content Creator',
    artifactLabel: 'Upload Log 07',
    narrativeP1: 'You spent six years explaining, patiently, the thing everyone else found too boring to say twice.',
    narrativeP2: 'At twenty-seven, a stranger messaged to say your video was the reason they finally saw a doctor about something they had ignored for a decade. You never posted about it. Some things are not content.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Content Creator",
      age: 27, place: 'No fixed address',
      knownFor: 'The video that got a stranger to finally see a doctor.',
      lifeLesson: 'Explaining something well is its own kind of kindness.',
      footer: 'Upload Log 07 · No Fixed Coordinates · 2026'
    },
    realityMirror: "You still explain things patiently to people who didn't ask. That part of you needed no other life to exist.",
    milestones: [
      { age: 19, text: 'First video got eleven views. Nine from family.' },
      { age: 22, text: 'Quit the day job after the algorithm finally noticed.' },
      { age: 25, text: 'Heard, for the first time, that a video actually changed something.' },
      { age: 27, text: 'A message from a stranger who finally saw a doctor because of it.' }
    ]
  },
  {
    id: 'footballer', num: '12', name: 'Professional Footballer', rgb: '90,255,120', tag: 'Buenos Aires, Argentina',
    wide: false,
    transitionStyle: 'kick',
    ambientStyle: 'pitch',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.arc(50*s,50*s,25*s,0,Math.PI*2);
      ctx.stroke();
      ctx.lineWidth = 1.5 * s;
      ctx.beginPath();
      ctx.moveTo(50*s,25*s); ctx.lineTo(50*s,75*s);
      ctx.moveTo(28*s,40*s); ctx.lineTo(72*s,60*s);
      ctx.stroke();
    },
    introHook: 'One goal. An entire nation still brings it up, unprompted.',
    bleed: 'You chose a game where one moment can outlive an entire career.',
    worldIntroTitle: 'Professional Footballer',
    artifactLabel: 'Match Log 07',
    narrativeP1: 'You spent nineteen years chasing the version of the game that only lasts ninety minutes at a time.',
    narrativeP2: 'At twenty-eight, in the final minute of a match nobody expected you to win, you scored with your weaker foot, almost by accident. Strangers still bring it up to you, unprompted, years later. You always act surprised. You aren\u2019t.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Footballer",
      age: 28, place: 'Buenos Aires, Argentina',
      knownFor: 'The goal an entire nation still brings up, unprompted.',
      lifeLesson: 'One accidental moment can outlast a thousand deliberate ones.',
      footer: 'Match Log 07 · 34.6037°S, 58.3816°W · 2029'
    },
    realityMirror: 'You still flinch, just slightly, at any ball rolling toward you in a park.',
    milestones: [
      { age: 14, text: 'Cut from the youth academy. Talked your way into a second trial.' },
      { age: 18, text: 'Debut. Substituted at halftime. Cried in the locker room.' },
      { age: 23, text: 'First international call-up. Sat the bench the entire tournament.' },
      { age: 28, text: 'The goal an entire nation still brings up, unprompted.' }
    ]
  },
  {
    id: 'chef', num: '13', name: 'Michelin-Starred Chef', rgb: '255,110,40', tag: 'Lyon, France',
    wide: true,
    transitionStyle: 'flare',
    ambientStyle: 'flicker',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(20*s,90*s); ctx.lineTo(45*s,30*s);
      ctx.moveTo(45*s,30*s);
      ctx.bezierCurveTo(40*s,20*s,55*s,20*s,50*s,30*s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(60*s,70*s);
      ctx.quadraticCurveTo(75*s,55*s,65*s,35*s);
      ctx.stroke();
    },
    introHook: 'Fourteen years chasing consistency, not genius.',
    bleed: 'You chose a kitchen where good enough was never good enough.',
    worldIntroTitle: 'Michelin-Starred Chef',
    artifactLabel: 'Kitchen Log 07',
    narrativeP1: 'You spent fourteen years learning that consistency is harder to master than genius.',
    narrativeP2: 'At thirty-seven, the night the second star arrived, you did not call anyone. You went back into the kitchen and re-salted a dish forty people had already praised. You never told the team why.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Chef",
      age: 37, place: 'Lyon, France',
      knownFor: 'The second Michelin star, earned the year no one expected it.',
      lifeLesson: 'Consistency is the harder, quieter genius.',
      footer: 'Kitchen Log 07 · 45.7640°N, 4.8357°E · 2029'
    },
    realityMirror: "You still care this much about something no one's watching you get right.",
    milestones: [
      { age: 20, text: "Fired from the first kitchen for questioning the head chef's sauce." },
      { age: 26, text: 'Opened a restaurant nobody thought would survive the year.' },
      { age: 33, text: 'First Michelin star. Cried in the walk-in fridge, alone.' },
      { age: 37, text: 'Second star, the year nobody expected it.' }
    ]
  },
  {
    id: 'comedian', num: '14', name: 'Stand-Up Comedian', rgb: '255,224,0', tag: 'Edinburgh, Scotland',
    wide: false,
    transitionStyle: 'spotlight',
    ambientStyle: 'spotlight',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.ellipse(50*s,30*s,14*s,18*s,0,0,Math.PI*2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(50*s,48*s); ctx.lineTo(50*s,80*s);
      ctx.moveTo(35*s,80*s); ctx.lineTo(65*s,80*s);
      ctx.stroke();
    },
    introHook: "The worst year of your life. The best hour of a stranger's night.",
    bleed: 'You chose to turn the worst year into the best hour, on purpose, on stage.',
    worldIntroTitle: 'Stand-Up Comedian',
    artifactLabel: 'Bit Log 07',
    narrativeP1: 'You spent seven years turning your worst material into other people\u2019s best nights out.',
    narrativeP2: 'At thirty-four, after the set about the year your marriage ended, a stranger waited by the door just to say thank you, that it was the first time she had laughed like that in months. You did not tell her the joke was not fully a joke. You just said you were glad.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Comedian",
      age: 34, place: 'Edinburgh, Scotland',
      knownFor: 'The hour built entirely from the worst year of your life.',
      lifeLesson: 'The truest material is the stuff that still slightly hurts to say out loud.',
      footer: 'Bit Log 07 · 55.9533°N, 3.1883°W · 2028'
    },
    realityMirror: 'You still turn bad days into a rough draft of a bit, almost without meaning to.',
    milestones: [
      { age: 20, text: 'First open mic. Five minutes. Silence for four of them.' },
      { age: 25, text: 'Quit the day job after a heckler became a regular fan.' },
      { age: 30, text: 'First sold-out room. Forgot the closer entirely.' },
      { age: 34, text: 'The hour built entirely from the worst year of your life.' }
    ]
  },
  {
    id: 'diver', num: '15', name: 'Deep-Sea Cable Diver', rgb: '0,194,214', tag: 'Mid-Atlantic Ridge',
    wide: false,
    transitionStyle: 'ripple',
    ambientStyle: 'bio',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(8*s,30*s);
      ctx.quadraticCurveTo(35*s,70*s,50*s,40*s);
      ctx.quadraticCurveTo(65*s,10*s,92*s,55*s);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(50*s,40*s,3*s,0,Math.PI*2);
      ctx.fillStyle = c;
      ctx.fill();
    },
    introHook: 'Ten years, four kilometers down, keeping the world connected.',
    bleed: "You chose the work nobody sees, until it stops working.",
    worldIntroTitle: 'Deep-Sea Cable Diver',
    artifactLabel: 'Dive Log 07',
    narrativeP1: 'You spent ten years repairing the lines nobody remembers exist until they stop working.',
    narrativeP2: 'At thirty-five, four kilometers down, your light passed over a cable section laid the same year you were born, still carrying signal, still doing its one job. You never wrote that thought down. It was not the kind of thing you logged.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Cable Diver",
      age: 35, place: 'Mid-Atlantic Ridge',
      knownFor: 'Keeping a continent\u2019s connection alive, four kilometers down.',
      lifeLesson: 'The most essential work is often the least seen.',
      footer: 'Dive Log 07 · 24.0000°N, 45.0000°W · 2030'
    },
    realityMirror: 'You still trust the things that quietly keep working, long after anyone thanks them.',
    milestones: [
      { age: 21, text: 'Nearly failed the pressure test. Passed on nerve alone.' },
      { age: 26, text: 'First real dive, four hundred meters down, hands shaking the whole way.' },
      { age: 31, text: "Repaired a break that had knocked out a country's internet for six hours." },
      { age: 35, text: 'Passed a cable laid the same year they were born, still working.' }
    ]
  },
  {
    id: 'designer', num: '16', name: 'Fashion Designer', rgb: '255,0,200', tag: 'Milan, Italy',
    wide: true,
    transitionStyle: 'runway',
    ambientStyle: 'runway',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(50*s,15*s); ctx.lineTo(35*s,35*s); ctx.lineTo(25*s,85*s);
      ctx.lineTo(75*s,85*s); ctx.lineTo(65*s,35*s);
      ctx.closePath();
      ctx.stroke();
    },
    introHook: 'A stranger, wearing what you made. You said nothing. You felt everything.',
    bleed: "You chose to dress strangers in things you'd never say out loud.",
    worldIntroTitle: 'Fashion Designer',
    artifactLabel: 'Collection Log 07',
    narrativeP1: 'You spent twelve years sketching things that only existed on paper until, suddenly, they did not.',
    narrativeP2: 'At thirty-six, on a train, you saw a stranger wearing your design from three collections ago, worn soft, clearly loved. You said nothing. You watched her get off two stops later and felt, briefly, completely full.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Fashion Designer",
      age: 36, place: 'Milan, Italy',
      knownFor: 'A silhouette every collection since has quietly borrowed from.',
      lifeLesson: 'The clothes that matter most are the ones you never see being worn.',
      footer: 'Collection Log 07 · 45.4642°N, 9.1900°E · 2030'
    },
    realityMirror: "You still notice, instinctively, exactly how a stranger's coat is cut.",
    milestones: [
      { age: 19, text: 'First sketchbook. Rejected from three design schools.' },
      { age: 24, text: 'First collection. Four buyers, all of them relatives.' },
      { age: 30, text: 'The silhouette every collection since has quietly borrowed from.' },
      { age: 36, text: 'A stranger on a train, wearing it, three years worn soft.' }
    ]
  },
  {
    id: 'archivist', num: '17', name: 'Seed Vault Archivist', rgb: '176,224,255', tag: 'Svalbard, Norway',
    wide: false,
    transitionStyle: 'shatter',
    ambientStyle: 'ice',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(50*s,8*s); ctx.lineTo(88*s,30*s); ctx.lineTo(88*s,70*s);
      ctx.lineTo(50*s,92*s); ctx.lineTo(12*s,70*s); ctx.lineTo(12*s,30*s);
      ctx.closePath();
      ctx.stroke();
    },
    introHook: 'Eighteen winters. Guarding what the world could not afford to lose.',
    bleed: 'You chose to guard a room built to outlast everyone who built it.',
    worldIntroTitle: 'Seed Vault Archivist',
    artifactLabel: 'Vault Log 07',
    narrativeP1: 'You spent eighteen winters guarding a room built to outlast everyone who built it.',
    narrativeP2: 'At forty, a courier arrived from a country already at war, carrying an envelope wrapped twice in cloth. You logged it without asking his name. You never learned if he made it home. It remained the question you carried longest.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm a Seed Vault Archivist",
      age: 40, place: 'Svalbard, Norway',
      knownFor: "Rebuilding a nation's barley from a single frozen envelope.",
      lifeLesson: 'Some people protect things so quietly, no one thanks them for it.',
      footer: 'Vault Log 07 · 78.2232°N, 15.6267°E · 2031'
    },
    realityMirror: 'You still keep the important things quietly, without needing credit for it.',
    milestones: [
      { age: 22, text: 'Applied for the job twice. Rejected the first time for lacking cold-weather experience.' },
      { age: 28, text: 'First full winter alone at the station. Talked to the seeds, a little.' },
      { age: 34, text: 'Logged the ten-millionth seed sample without any ceremony at all.' },
      { age: 40, text: 'The envelope from a country already at war, wrapped twice in cloth.' }
    ]
  },
  {
    id: 'astronaut', num: '18', name: 'Astronaut', rgb: '45,212,150', tag: 'Low Earth Orbit',
    wide: true,
    transitionStyle: 'warp',
    ambientStyle: 'stars',
    motif: (ctx, s, c) => {
      ctx.strokeStyle = c; ctx.lineWidth = 2.5 * s;
      ctx.beginPath();
      ctx.moveTo(15*s,72*s);
      ctx.bezierCurveTo(35*s,25*s,65*s,25*s,85*s,72*s);
      ctx.stroke();
      ctx.fillStyle = c;
      ctx.beginPath(); ctx.arc(50*s,42*s,2.6*s,0,Math.PI*2); ctx.fill();
    },
    introHook: 'Four minutes of weightlessness. Worth six years of training.',
    bleed: 'You watched Earth from outside it. Nobody comes back from that unchanged.',
    worldIntroTitle: 'Astronaut',
    artifactLabel: 'Mission Log 07',
    narrativeP1: 'You spent six years training for four minutes of weightlessness that mattered more than the other five combined.',
    narrativeP2: 'At forty-four, outside the station, your tether caught the light at an angle no camera captured. For eleven seconds, you forgot to be afraid. You never described it accurately to anyone since.',
    poster: {
      lead: 'In a parallel world,', headline: "I'm an Astronaut",
      age: 44, place: 'Low Earth Orbit',
      knownFor: 'The longest spacewalk anyone has logged.',
      lifeLesson: 'People who leave Earth come back loving it more, not less.',
      footer: 'Mission Log 07 · 408 KM Altitude · 2034'
    },
    realityMirror: 'You still know, better than most, how small most arguments really are.',
    milestones: [
      { age: 18, text: 'Rejected from the academy. Two centimeters too tall.' },
      { age: 24, text: 'Passed the centrifuge test on the third attempt. Threw up anyway.' },
      { age: 36, text: 'First mission scrubbed four hours before launch.' },
      { age: 44, text: 'Forgot to be afraid, for eleven seconds.' }
    ]
  }
];

const SITE_URL = 'www.basith.xyz/zyx';

/* ---------- liquid field (landing hero visual) ---------- */
const liquidBack = document.getElementById('liquidBack');
const liquidFront = document.getElementById('liquidFront');
const lbCtx = liquidBack.getContext('2d');
const lfCtx = liquidFront.getContext('2d');
const cursorGlowEl = document.getElementById('cursorGlow');

let liquidRAF = null;
let liquidRunning = false;
let liquidLastTime = performance.now();

const LIQUID_PALETTE = LIVES.map(l => l.rgb);
function parseRgb(str) { return str.split(',').map(Number); }
function lerpRgb(a, b, t) {
  return `${Math.round(a[0]+(b[0]-a[0])*t)},${Math.round(a[1]+(b[1]-a[1])*t)},${Math.round(a[2]+(b[2]-a[2])*t)}`;
}

function makeLiquidBlob(sizeMin, sizeMax, freqMin, freqMax) {
  return {
    xBase: Math.random(), yBase: Math.random(),
    ampX: 0.16 + Math.random()*0.22, ampY: 0.16 + Math.random()*0.22,
    freqX: freqMin + Math.random()*(freqMax-freqMin),
    freqY: freqMin + Math.random()*(freqMax-freqMin),
    phaseX: Math.random()*Math.PI*2, phaseY: Math.random()*Math.PI*2,
    radiusFrac: sizeMin + Math.random()*(sizeMax-sizeMin),
    colorIdx: Math.floor(Math.random()*LIQUID_PALETTE.length),
    nextColorIdx: Math.floor(Math.random()*LIQUID_PALETTE.length),
    colorT: Math.random(), colorSpeed: 0.015 + Math.random()*0.015
  };
}
const liquidBackBlobs = Array.from({ length: 5 }, () => makeLiquidBlob(0.32, 0.5, 0.025, 0.05));
const liquidFrontBlobs = Array.from({ length: 6 }, () => makeLiquidBlob(0.14, 0.26, 0.045, 0.09));

function renderLiquidBlobs(ctx, canvas, blobs, dt, now) {
  const w = canvas.width, h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  const t = now / 1000;
  blobs.forEach(b => {
    b.colorT += b.colorSpeed * dt;
    if (b.colorT >= 1) {
      b.colorT = 0; b.colorIdx = b.nextColorIdx;
      b.nextColorIdx = Math.floor(Math.random()*LIQUID_PALETTE.length);
    }
    const color = lerpRgb(parseRgb(LIQUID_PALETTE[b.colorIdx]), parseRgb(LIQUID_PALETTE[b.nextColorIdx]), b.colorT);
    const x = (b.xBase + Math.sin(t*b.freqX + b.phaseX) * b.ampX) * w;
    const y = (b.yBase + Math.cos(t*b.freqY + b.phaseY) * b.ampY) * h;
    const r = b.radiusFrac * Math.max(w, h);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(${color},0.4)`);
    grad.addColorStop(1, `rgba(${color},0)`);
    ctx.fillStyle = grad;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill();
  });
  ctx.globalCompositeOperation = 'source-over';
}

/* ghost motifs — a life's own line-art quietly surfaces through the color, then dissolves */
let ghostState = null;
function maybeSpawnGhost(now) {
  if (!ghostState || now - ghostState.startTime > ghostState.duration + ghostState.pause) {
    const life = LIVES[Math.floor(Math.random()*LIVES.length)];
    ghostState = {
      life,
      x: 0.22 + Math.random()*0.56, y: 0.22 + Math.random()*0.5,
      rot: (Math.random()-0.5)*0.5,
      scale: 1.4 + Math.random()*1.3,
      startTime: now, duration: 2600, pause: 2400 + Math.random()*2200
    };
  }
}
function renderGhost(ctx, w, h, now) {
  if (!ghostState) return;
  const elapsed = now - ghostState.startTime;
  if (elapsed > ghostState.duration) return;
  const localT = elapsed / ghostState.duration;
  const alpha = Math.sin(localT * Math.PI) * 0.13;
  if (alpha <= 0.002) return;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.translate(ghostState.x * w, ghostState.y * h);
  ctx.rotate(ghostState.rot);
  const s = ghostState.scale * (w / 900);
  ghostState.life.motif(ctx, s, `rgb(${ghostState.life.rgb})`);
  ctx.restore();
}

/* fine drifting specks for grain and sparkle */
const liquidSpecks = Array.from({ length: 46 }, () => ({
  x: Math.random(), y: Math.random(), r: 0.3 + Math.random()*1.3,
  tw: Math.random()*Math.PI*2, speed: 0.25 + Math.random()*0.55
}));
function renderSpecks(ctx, w, h, t) {
  liquidSpecks.forEach(s => {
    const alpha = 0.12 + 0.3 * Math.max(0, Math.sin(t*s.speed + s.tw));
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.beginPath(); ctx.arc(s.x*w, s.y*h, s.r*(w/560), 0, Math.PI*2); ctx.fill();
  });
}

/* desktop-only cursor glow, trailing the pointer with a soft lag */
const isDesktopPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
let cursorPos = { x: window.innerWidth/2, y: window.innerHeight/2 };
let cursorTarget = { x: cursorPos.x, y: cursorPos.y };
if (isDesktopPointer) {
  cursorGlowEl.classList.add('active');
  window.addEventListener('mousemove', (e) => {
    cursorTarget.x = e.clientX; cursorTarget.y = e.clientY;
  });
}

function resizeLiquid() {
  [liquidBack, liquidFront].forEach(c => {
    const scale = 0.55; // render smaller, CSS blur hides the softness — cheap on mobile
    c.width = Math.max(1, Math.floor(c.clientWidth * scale));
    c.height = Math.max(1, Math.floor(c.clientHeight * scale));
  });
}
window.addEventListener('resize', resizeLiquid);

function liquidLoop(now) {
  if (!liquidRunning) return;
  const dt = Math.min(0.05, (now - liquidLastTime) / 1000);
  liquidLastTime = now;

  renderLiquidBlobs(lbCtx, liquidBack, liquidBackBlobs, dt, now);
  renderLiquidBlobs(lfCtx, liquidFront, liquidFrontBlobs, dt, now);
  maybeSpawnGhost(now);
  renderGhost(lfCtx, liquidFront.width, liquidFront.height, now);
  renderSpecks(lfCtx, liquidFront.width, liquidFront.height, now/1000);

  if (isDesktopPointer) {
    cursorPos.x += (cursorTarget.x - cursorPos.x) * 0.06;
    cursorPos.y += (cursorTarget.y - cursorPos.y) * 0.06;
    cursorGlowEl.style.transform = `translate(${cursorPos.x-170}px, ${cursorPos.y-170}px)`;
  }

  liquidRAF = requestAnimationFrame(liquidLoop);
}

function initLiquidField() {
  resizeLiquid();
  liquidRunning = true;
  liquidLastTime = performance.now();
  liquidRAF = requestAnimationFrame(liquidLoop);
}
function stopLiquidField() {
  liquidRunning = false;
  if (liquidRAF) cancelAnimationFrame(liquidRAF);
}

/* ---------- landing staged reveal ---------- */
function playLandingReveal() {
  const beats = [
    { id: 'beatMark', t: 0 },
    { id: 'beatSomewhere', t: 2800 },   // dramatic pause
    { id: 'beatImagined', t: 4700 },    // brief pause
    { id: 'beatGrounding', t: 6900 },   // breather
    { id: 'scrollCue', t: 7600 }
  ];
  beats.forEach(b => {
    setTimeout(() => {
      const el = document.getElementById(b.id);
      if (el) el.classList.add('show');
    }, b.t);
  });
}

let footerObserver = null;
function armFooterReveal() {
  const footer = document.getElementById('landingFooter');
  footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          document.getElementById('footerLine').classList.add('show');
          document.getElementById('livesCounter').classList.add('show');
        }, 2000);
        footerObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  footerObserver.observe(footer);
}

/* ---------- build the grid ---------- */
const gridEl = document.getElementById('grid');
const TRIED_KEY = 'elsewhere_tried_lives';
function getTriedLives() {
  try { return JSON.parse(localStorage.getItem(TRIED_KEY)) || []; }
  catch (e) { return []; }
}
function markLifeTried(id) {
  try {
    const tried = getTriedLives();
    if (!tried.includes(id)) {
      tried.push(id);
      localStorage.setItem(TRIED_KEY, JSON.stringify(tried));
    }
  } catch (e) { /* storage unavailable, fail quietly */ }
  updateLivesCounter();
}
function updateLivesCounter() {
  const el = document.getElementById('livesCounter');
  if (!el) return;
  const count = getTriedLives().length;
  el.textContent = `${count}/${LIVES.length}`;
}

LIVES.forEach(life => {
  const card = document.createElement('div');
  card.className = 'card' + (life.wide ? ' wide' : '');
  card.dataset.lifeId = life.id;
  card.style.setProperty('--c', life.rgb);

  const badgeCanvas = document.createElement('canvas');
  badgeCanvas.width = 100; badgeCanvas.height = 100;
  const bctx = badgeCanvas.getContext('2d');
  life.motif(bctx, 1, `rgb(${life.rgb})`);
  const badgeWrap = document.createElement('div');
  badgeWrap.className = 'portal';
  badgeWrap.appendChild(badgeCanvas);

  card.innerHTML = `<div class="card-num">${life.num}</div>
    <div class="card-name">${life.name}</div>
    <div class="tried-dot" title="Already lived"></div>`;
  card.appendChild(badgeWrap);
  if (getTriedLives().includes(life.id)) card.classList.add('tried');
  card.addEventListener('click', (e) => {
    const rect = card.getBoundingClientRect();
    const originX = rect.left + rect.width/2;
    const originY = rect.top + rect.height/2;
    card.classList.add('tapped');
    enterLife(life, originX, originY);
  });
  gridEl.appendChild(card);
});
updateLivesCounter();

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('in-view'), i * 70);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.card').forEach(c => cardObserver.observe(c));

/* ---------- tilt permission (best-effort, ignored if unsupported) ---------- */
let tiltX = 0, tiltY = 0;
let tiltInitialized = false;
function initTilt() {
  if (tiltInitialized) return;
  tiltInitialized = true;
  // Only auto-enable where no native permission dialog is required.
  // iOS requires an explicit user-triggered prompt, which interrupts the
  // tap moment, so we skip requesting it for now rather than popping a
  // native dialog right as someone enters a life.
  if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission !== 'function') {
    window.addEventListener('deviceorientation', onTilt);
  }
}
function onTilt(e) {
  tiltX = Math.max(-1, Math.min(1, (e.gamma || 0) / 30));
  tiltY = Math.max(-1, Math.min(1, (e.beta || 0) / 45));
}

/* Desktop parallax parity: mouse position drives the same tiltX/tiltY the
   ambient depth layer already reads from phone tilt, so laptop visitors
   get equivalent depth motion instead of a static background. */
let usingMouseParallax = false;
window.addEventListener('mousemove', (e) => {
  usingMouseParallax = true;
  const nx = (e.clientX / window.innerWidth) * 2 - 1;
  const ny = (e.clientY / window.innerHeight) * 2 - 1;
  tiltX = nx * 0.7;
  tiltY = ny * 0.5;
});

/* ---------- ambient depth canvas ---------- */
const depthCanvas = document.getElementById('depthCanvas');
const dctx = depthCanvas.getContext('2d');
let depthParticles = [];
let depthStyle = null;
let depthIntensity = 0.3;
let depthRAF = null;

const AMBIENT_CONFIG = {
  stars:      { count: 90, rMin: 0.3, rMax: 1.9, sMin: 0.01, sMax: 0.07, motion: 'twinkleSide' },
  bio:        { count: 44, rMin: 0.5, rMax: 2.0, sMin: 0.02, sMax: 0.06, motion: 'twinkleUp' },
  bokeh:      { count: 22, rMin: 20,  rMax: 60,  sMin: 0.01, sMax: 0.05, motion: 'glowUp' },
  clouds:     { count: 10, rMin: 90,  rMax: 200, sMin: 0.008,sMax: 0.02, motion: 'glowSide' },
  smoke:      { count: 14, rMin: 40,  rMax: 90,  sMin: 0.01, sMax: 0.03, motion: 'glowUp' },
  glow:       { count: 5,  rMin: 110, rMax: 230, sMin: 0,    sMax: 0,    motion: 'pulseStatic' },
  flicker:    { count: 10, rMin: 16,  rMax: 42,  sMin: 0,    sMax: 0,    motion: 'flickerStatic' },
  ice:        { count: 60, rMin: 0.5, rMax: 1.8, sMin: 0.015,sMax: 0.05, motion: 'driftDown' },
  streaks:    { count: 24, rMin: 40,  rMax: 140, sMin: 0.03, sMax: 0.09, motion: 'lineSide' },
  sparkle:    { count: 50, rMin: 0.5, rMax: 2.2, sMin: 0.02, sMax: 0.08, motion: 'twinkleSide' },
  stagelight: { count: 8,  rMin: 100, rMax: 220, sMin: 0.01, sMax: 0.025,motion: 'glowSide' },
  pulse:      { count: 6,  rMin: 120, rMax: 240, sMin: 0,    sMax: 0,    motion: 'pulseStatic' },
  confetti:   { count: 55, rMin: 0.6, rMax: 2.4, sMin: 0.03, sMax: 0.09, motion: 'twinkleUp' },
  pages:      { count: 40, rMin: 0.6, rMax: 2.0, sMin: 0.015,sMax: 0.045,motion: 'driftDown' },
  pitch:      { count: 22, rMin: 50,  rMax: 150, sMin: 0.03, sMax: 0.08, motion: 'lineSide' },
  spotlight:  { count: 4,  rMin: 160, rMax: 280, sMin: 0,    sMax: 0,    motion: 'pulseStatic' },
  runway:     { count: 9,  rMin: 100, rMax: 210, sMin: 0.01, sMax: 0.02, motion: 'glowSide' }
};

function resizeCanvas(canvas) {
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
}
window.addEventListener('resize', () => { resizeCanvas(depthCanvas); });
resizeCanvas(depthCanvas);

function buildDepthParticles(style, rgb) {
  depthParticles = [];
  const w = window.innerWidth, h = window.innerHeight;

  if (style === 'blueprint') return; // grid drawn analytically, no particles

  const cfg = AMBIENT_CONFIG[style];
  if (!cfg) return;
  for (let i = 0; i < cfg.count; i++) {
    depthParticles.push({
      x: Math.random()*w, y: Math.random()*h,
      r: cfg.rMin + Math.random()*(cfg.rMax - cfg.rMin),
      speed: cfg.sMin + Math.random()*(cfg.sMax - cfg.sMin),
      tw: Math.random()*Math.PI*2,
      depth: Math.random()
    });
  }
}

function renderDepth() {
  const w = depthCanvas.width, h = depthCanvas.height;
  dctx.clearRect(0, 0, w, h);
  const rgb = getComputedStyle(document.documentElement).getPropertyValue('--life-rgb').trim();
  const t = performance.now() / 1000;
  const dpr = devicePixelRatio;
  const shiftX = tiltX * 14 * dpr;
  const shiftY = tiltY * 10 * dpr;

  if (depthStyle === 'blueprint') {
    const spacing = 48 * dpr;
    dctx.strokeStyle = `rgba(${rgb}, ${0.05 * depthIntensity})`;
    dctx.lineWidth = 1;
    const offX = (shiftX) % spacing;
    const offY = (shiftY) % spacing;
    for (let x = -spacing; x < w + spacing; x += spacing) {
      dctx.beginPath(); dctx.moveTo(x+offX, 0); dctx.lineTo(x+offX, h); dctx.stroke();
    }
    for (let y = -spacing; y < h + spacing; y += spacing) {
      dctx.beginPath(); dctx.moveTo(0, y+offY); dctx.lineTo(w, y+offY); dctx.stroke();
    }
    depthRAF = requestAnimationFrame(renderDepth);
    return;
  }

  const cfg = AMBIENT_CONFIG[depthStyle];
  if (cfg) {
    depthParticles.forEach(p => {
      const par = 0.3 + p.depth;

      if (cfg.motion === 'twinkleSide') {
        const x = p.x*dpr + shiftX*par - (t*p.speed*20*dpr*par);
        const y = p.y*dpr + shiftY*par;
        const wrappedX = ((x % w) + w) % w;
        const alpha = (0.25 + 0.5*Math.sin(t*1.2 + p.tw)*0.5+0.25) * depthIntensity;
        dctx.fillStyle = `rgba(${rgb},${alpha})`;
        dctx.beginPath(); dctx.arc(wrappedX, y, p.r*dpr*par, 0, Math.PI*2); dctx.fill();

      } else if (cfg.motion === 'twinkleUp') {
        const x = p.x*dpr + shiftX*par;
        const y = p.y*dpr + shiftY*par - (t*p.speed*30*dpr);
        const wrappedY = h - (((h - y) % h) + h) % h;
        const alpha = (0.3 + 0.4*Math.sin(t*1.4 + p.tw)) * depthIntensity;
        dctx.fillStyle = `rgba(${rgb},${Math.max(0,alpha)})`;
        dctx.beginPath(); dctx.arc(x, wrappedY, p.r*dpr*par, 0, Math.PI*2); dctx.fill();

      } else if (cfg.motion === 'glowUp') {
        const x = p.x*dpr + shiftX*par;
        const y = p.y*dpr + shiftY*par - (t*p.speed*10*dpr);
        const wrappedY = ((y % h) + h) % h;
        const alpha = (0.06 + p.depth*0.08) * depthIntensity;
        const grad = dctx.createRadialGradient(x, wrappedY, 0, x, wrappedY, p.r*dpr);
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        dctx.fillStyle = grad;
        dctx.beginPath(); dctx.arc(x, wrappedY, p.r*dpr, 0, Math.PI*2); dctx.fill();

      } else if (cfg.motion === 'glowSide') {
        const x = p.x*dpr + shiftX*par - (t*p.speed*14*dpr);
        const wrappedX = ((x % w) + w) % w;
        const y = p.y*dpr + shiftY*par;
        const alpha = (0.05 + p.depth*0.06) * depthIntensity;
        const grad = dctx.createRadialGradient(wrappedX, y, 0, wrappedX, y, p.r*dpr);
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        dctx.fillStyle = grad;
        dctx.beginPath(); dctx.arc(wrappedX, y, p.r*dpr, 0, Math.PI*2); dctx.fill();

      } else if (cfg.motion === 'pulseStatic') {
        const x = p.x*dpr + shiftX*par*0.4;
        const y = p.y*dpr + shiftY*par*0.4;
        const pulse = 0.5 + 0.5*Math.sin(t*0.5 + p.tw);
        const alpha = (0.05 + pulse*0.07) * depthIntensity;
        const grad = dctx.createRadialGradient(x, y, 0, x, y, p.r*dpr);
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        dctx.fillStyle = grad;
        dctx.beginPath(); dctx.arc(x, y, p.r*dpr, 0, Math.PI*2); dctx.fill();

      } else if (cfg.motion === 'flickerStatic') {
        const x = p.x*dpr + shiftX*par*0.3;
        const y = p.y*dpr + shiftY*par*0.3;
        const flicker = 0.55 + Math.random()*0.45;
        const alpha = (0.08 + flicker*0.10) * depthIntensity;
        const grad = dctx.createRadialGradient(x, y, 0, x, y, p.r*dpr);
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        dctx.fillStyle = grad;
        dctx.beginPath(); dctx.arc(x, y, p.r*dpr, 0, Math.PI*2); dctx.fill();

      } else if (cfg.motion === 'driftDown') {
        const x = p.x*dpr + shiftX*par;
        const y = p.y*dpr + shiftY*par + (t*p.speed*24*dpr);
        const wrappedY = ((y % h) + h) % h;
        const alpha = (0.2 + 0.35*Math.sin(t*1.1 + p.tw)*0.5+0.15) * depthIntensity;
        dctx.fillStyle = `rgba(${rgb},${Math.max(0,alpha)})`;
        dctx.beginPath(); dctx.arc(x, wrappedY, p.r*dpr*par, 0, Math.PI*2); dctx.fill();

      } else if (cfg.motion === 'lineSide') {
        const len = p.r*dpr;
        const x = p.x*dpr + shiftX*par - (t*p.speed*40*dpr*par);
        const wrappedX = ((x % (w+len)) + (w+len)) % (w+len) - len;
        const y = p.y*dpr + shiftY*par;
        const alpha = (0.1 + p.depth*0.12) * depthIntensity;
        dctx.strokeStyle = `rgba(${rgb},${alpha})`;
        dctx.lineWidth = 1.2*dpr;
        dctx.beginPath(); dctx.moveTo(wrappedX, y); dctx.lineTo(wrappedX+len, y); dctx.stroke();
      }
    });
  }

  depthRAF = requestAnimationFrame(renderDepth);
}

function startDepth(life) {
  depthStyle = life.ambientStyle;
  buildDepthParticles(depthStyle, life.rgb);
  depthIntensity = 0.3;
  depthCanvas.classList.add('active');
  if (depthRAF) cancelAnimationFrame(depthRAF);
  renderDepth();
}
function stopDepth() {
  depthCanvas.classList.remove('active');
  if (depthRAF) { cancelAnimationFrame(depthRAF); depthRAF = null; }
}

/* ---------- tap transition fx (canvas) ---------- */
const transCanvas = document.getElementById('transCanvas');
const tctx = transCanvas.getContext('2d');
function playTransitionFx(style, rgb, originX, originY) {
  resizeCanvas(transCanvas);
  const w = transCanvas.width, h = transCanvas.height;
  const start = performance.now();
  const duration = 1500;
  const particles = [];
  const dpr = devicePixelRatio;
  const cx = originX !== undefined ? originX * dpr : w/2;
  const cy = originY !== undefined ? originY * dpr : h/2;

  if (style === 'steam') {
    for (let i=0;i<26;i++) particles.push({
      angle: Math.random()*Math.PI*2, dist: 30+Math.random()*40,
      size: 20+Math.random()*70, delay: Math.random()*0.2
    });
  } else if (style === 'grid') {
    for (let i=0;i<18;i++) particles.push({
      x: Math.random()*w, y: Math.random()*h, delay: Math.random()*0.25, len: 60+Math.random()*160
    });
  } else if (style === 'warp') {
    for (let i=0;i<44;i++) particles.push({
      angle: Math.random()*Math.PI*2, delay: Math.random()*0.15, len: 40+Math.random()*180
    });
  } else if (style === 'cloud') {
    for (let i=0;i<9;i++) particles.push({
      side: i%2===0 ? -1 : 1, y: cy + (Math.random()-0.5)*h*0.6,
      size: 100+Math.random()*160, delay: Math.random()*0.2
    });
  } else if (style === 'streak') {
    for (let i=0;i<40;i++) particles.push({
      y: Math.random()*h, len: 60+Math.random()*220, delay: Math.random()*0.15,
      side: Math.random() < 0.5 ? -1 : 1
    });
  } else if (style === 'smoke') {
    for (let i=0;i<20;i++) particles.push({
      angle: Math.random()*Math.PI*2, dist: 20+Math.random()*50,
      size: 30+Math.random()*80, delay: Math.random()*0.2, rot: (Math.random()-0.5)*2
    });
  } else if (style === 'glitch') {
    for (let i=0;i<30;i++) particles.push({
      x: Math.random()*w, y: Math.random()*h,
      w: 20+Math.random()*140, hgt: 4+Math.random()*24, delay: Math.random()*0.3
    });
  } else if (style === 'flare') {
    for (let i=0;i<34;i++) particles.push({
      angle: Math.random()*Math.PI*2, dist: 20+Math.random()*70,
      size: 4+Math.random()*14, delay: Math.random()*0.25
    });
  } else if (style === 'ripple') {
    for (let i=0;i<6;i++) particles.push({ ring: true, delay: i*0.12 });
    for (let i=0;i<20;i++) particles.push({
      ring: false, angle: Math.random()*Math.PI*2, dist: 20+Math.random()*60,
      size: 3+Math.random()*6, delay: Math.random()*0.3
    });
  } else if (style === 'flash') {
    for (let i=0;i<24;i++) particles.push({
      x: Math.random()*w, y: Math.random()*h,
      size: 6+Math.random()*22, delay: Math.random()*0.5, dur: 0.15+Math.random()*0.2
    });
  } else if (style === 'curtain') {
    particles.push({ side: -1 }, { side: 1 });
  } else if (style === 'pulse') {
    for (let i=0;i<5;i++) particles.push({ ring: true, delay: i*0.1 });
    for (let i=0;i<16;i++) particles.push({
      ring: false, angle: Math.random()*Math.PI*2, len: 80+Math.random()*220, delay: Math.random()*0.2
    });
  } else if (style === 'burst') {
    for (let i=0;i<50;i++) particles.push({
      angle: Math.random()*Math.PI*2, dist: 30+Math.random()*90,
      size: 3+Math.random()*8, delay: Math.random()*0.2
    });
  } else if (style === 'pageturn') {
    for (let i=0;i<5;i++) particles.push({
      w2: w*(0.3+Math.random()*0.3), h2: h*(0.3+Math.random()*0.25),
      x: Math.random()*w, y: Math.random()*h, rot: (Math.random()-0.5)*0.6, delay: i*0.08
    });
  } else if (style === 'kick') {
    particles.push({ ball: true });
    for (let i=0;i<14;i++) particles.push({
      ring: false, ripple: true, angle: Math.random()*Math.PI*2, dist: 10+Math.random()*40,
      size: 2+Math.random()*5, delay: 0.5+Math.random()*0.2
    });
  } else if (style === 'spotlight') {
    particles.push({ spot: true });
  } else if (style === 'runway') {
    for (let i=0;i<8;i++) particles.push({
      x: (i/8)*w + w*0.06, delay: i*0.06, width2: w*0.08
    });
  } else { // shatter fallback
    for (let i=0;i<20;i++) particles.push({
      angle: Math.random()*Math.PI*2, dist: 20+Math.random()*60, size: 14+Math.random()*40, delay: Math.random()*0.2
    });
  }

  function frame(now) {
    const elapsed = (now - start) / duration;
    tctx.clearRect(0,0,w,h);
    if (elapsed >= 1) return;

    particles.forEach(p => {
      const local = Math.max(0, Math.min(1, (elapsed - p.delay) / 0.7));
      const ease = 1 - Math.pow(1-local, 3);

      if (style === 'steam') {
        const dist = ease * p.dist * dpr * 3;
        const x = cx + Math.cos(p.angle)*dist*0.3;
        const y = cy + Math.sin(p.angle)*dist - ease*140*dpr;
        const alpha = (1-ease) * 0.5;
        const grad = tctx.createRadialGradient(x,y,0,x,y,p.size*dpr*(0.5+ease));
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        tctx.fillStyle = grad;
        tctx.beginPath(); tctx.arc(x,y,p.size*dpr*(0.5+ease),0,Math.PI*2); tctx.fill();
      } else if (style === 'grid') {
        const alpha = Math.sin(local*Math.PI) * 0.5;
        tctx.strokeStyle = `rgba(${rgb},${alpha})`;
        tctx.lineWidth = 1.5*dpr;
        tctx.beginPath();
        tctx.moveTo(p.x, p.y);
        tctx.lineTo(p.x, p.y + p.len*dpr*ease);
        tctx.stroke();
      } else if (style === 'warp') {
        const dist = ease * p.len * dpr * 4;
        const x1 = cx + Math.cos(p.angle)*dist*0.2;
        const y1 = cy + Math.sin(p.angle)*dist*0.2;
        const x2 = cx + Math.cos(p.angle)*dist;
        const y2 = cy + Math.sin(p.angle)*dist;
        const alpha = Math.sin(local*Math.PI) * 0.7;
        tctx.strokeStyle = `rgba(${rgb},${alpha})`;
        tctx.lineWidth = 1.2*dpr;
        tctx.beginPath(); tctx.moveTo(x1,y1); tctx.lineTo(x2,y2); tctx.stroke();
      } else if (style === 'cloud') {
        const travel = ease * w * 0.6 * dpr;
        const x = cx + p.side * travel;
        const y = p.y * dpr;
        const alpha = Math.sin(local*Math.PI) * 0.55;
        const grad = tctx.createRadialGradient(x,y,0,x,y,p.size*dpr);
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        tctx.fillStyle = grad;
        tctx.beginPath(); tctx.arc(x,y,p.size*dpr,0,Math.PI*2); tctx.fill();
      } else if (style === 'streak') {
        const travel = ease * w * dpr * 1.2;
        const x = cx + p.side * travel;
        const alpha = Math.sin(local*Math.PI) * 0.8;
        tctx.strokeStyle = `rgba(${rgb},${alpha})`;
        tctx.lineWidth = 2*dpr;
        tctx.beginPath();
        tctx.moveTo(x, p.y*dpr);
        tctx.lineTo(x + p.side*p.len*dpr, p.y*dpr);
        tctx.stroke();
      } else if (style === 'smoke') {
        const dist = ease * p.dist * dpr * 2;
        const ang = p.angle + p.rot*ease;
        const x = cx + Math.cos(ang)*dist;
        const y = cy + Math.sin(ang)*dist - ease*60*dpr;
        const alpha = (1-ease) * 0.4;
        const grad = tctx.createRadialGradient(x,y,0,x,y,p.size*dpr*(0.6+ease*0.6));
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        tctx.fillStyle = grad;
        tctx.beginPath(); tctx.arc(x,y,p.size*dpr*(0.6+ease*0.6),0,Math.PI*2); tctx.fill();
      } else if (style === 'glitch') {
        const jitter = (Math.random()-0.5) * 30 * dpr * (1-ease);
        const alpha = Math.sin(local*Math.PI) * 0.7;
        tctx.fillStyle = `rgba(${rgb},${alpha})`;
        tctx.fillRect(p.x*dpr + jitter, p.y*dpr, p.w*dpr, p.hgt*dpr);
      } else if (style === 'flare') {
        const dist = ease * p.dist * dpr * 3.5;
        const x = cx + Math.cos(p.angle)*dist*0.4;
        const y = cy + Math.sin(p.angle)*dist - ease*100*dpr;
        const alpha = (1-ease*0.8) * 0.9;
        tctx.fillStyle = `rgba(${rgb},${alpha})`;
        tctx.beginPath(); tctx.arc(x,y,p.size*dpr*(1-ease*0.4),0,Math.PI*2); tctx.fill();
      } else if (style === 'ripple') {
        if (p.ring) {
          const dist = ease * Math.max(w,h) * dpr * 0.7;
          const alpha = (1-ease) * 0.5;
          tctx.strokeStyle = `rgba(${rgb},${alpha})`;
          tctx.lineWidth = 2*dpr;
          tctx.beginPath(); tctx.arc(cx,cy,dist,0,Math.PI*2); tctx.stroke();
        } else {
          const dist = ease * p.dist * dpr * 3;
          const x = cx + Math.cos(p.angle)*dist*0.3;
          const y = cy + Math.sin(p.angle)*dist - ease*120*dpr;
          const alpha = (1-ease) * 0.6;
          tctx.fillStyle = `rgba(${rgb},${alpha})`;
          tctx.beginPath(); tctx.arc(x,y,p.size*dpr,0,Math.PI*2); tctx.fill();
        }
      } else if (style === 'flash') {
        const flashLocal = Math.max(0, Math.min(1, (elapsed - p.delay) / p.dur));
        const alpha = Math.sin(flashLocal*Math.PI) * 0.95;
        const mixed = `rgba(255,255,255,${alpha*0.6})`;
        tctx.fillStyle = alpha > 0 ? mixed : 'rgba(0,0,0,0)';
        tctx.beginPath(); tctx.arc(p.x*dpr, p.y*dpr, p.size*dpr, 0, Math.PI*2); tctx.fill();
        tctx.fillStyle = `rgba(${rgb},${alpha*0.5})`;
        tctx.beginPath(); tctx.arc(p.x*dpr, p.y*dpr, p.size*dpr*1.6, 0, Math.PI*2); tctx.fill();
      } else if (style === 'curtain') {
        const travel = ease * (w/2) * dpr;
        const x = p.side < 0 ? 0 : w - travel;
        const width2 = p.side < 0 ? (w/2*dpr - travel) : travel;
        const alpha = 1 - ease*0.3;
        tctx.fillStyle = `rgba(${rgb},${alpha*0.85})`;
        tctx.fillRect(p.side < 0 ? 0 : w - width2, 0, width2, h);
      } else if (style === 'pulse') {
        if (p.ring) {
          const dist = ease * Math.max(w,h) * dpr * 0.75;
          const alpha = (1-ease) * 0.6;
          tctx.strokeStyle = `rgba(${rgb},${alpha})`;
          tctx.lineWidth = 3*dpr;
          tctx.beginPath(); tctx.arc(cx,cy,dist,0,Math.PI*2); tctx.stroke();
        } else {
          const dist = ease * p.len * dpr * 2.2;
          const x1 = cx + Math.cos(p.angle)*dist*0.3;
          const y1 = cy + Math.sin(p.angle)*dist*0.3;
          const x2 = cx + Math.cos(p.angle)*dist;
          const y2 = cy + Math.sin(p.angle)*dist;
          const alpha = Math.sin(local*Math.PI) * 0.8;
          tctx.strokeStyle = `rgba(${rgb},${alpha})`;
          tctx.lineWidth = 2.5*dpr;
          tctx.beginPath(); tctx.moveTo(x1,y1); tctx.lineTo(x2,y2); tctx.stroke();
        }
      } else if (style === 'burst') {
        const dist = ease * p.dist * dpr * 4;
        const fall = ease*ease * 40*dpr;
        const x = cx + Math.cos(p.angle)*dist;
        const y = cy + Math.sin(p.angle)*dist + fall;
        const alpha = (1-ease) * 0.9;
        tctx.fillStyle = `rgba(${rgb},${alpha})`;
        tctx.beginPath(); tctx.arc(x,y,p.size*dpr*(1-ease*0.5),0,Math.PI*2); tctx.fill();
      } else if (style === 'pageturn') {
        const rotAmt = ease * p.rot * 3;
        const alpha = Math.sin(local*Math.PI) * 0.5;
        tctx.save();
        tctx.translate(p.x*dpr, p.y*dpr);
        tctx.rotate(rotAmt);
        tctx.fillStyle = `rgba(${rgb},${alpha})`;
        tctx.fillRect(-p.w2*dpr/2, -p.h2*dpr/2, p.w2*dpr, p.h2*dpr);
        tctx.restore();
      } else if (style === 'kick') {
        if (p.ball) {
          const bx = (ease*1.3 - 0.15) * w * dpr;
          const by = cy + Math.sin(ease*Math.PI)* -h*0.25*dpr;
          const alpha = 1 - ease*0.3;
          tctx.fillStyle = `rgba(${rgb},${alpha})`;
          tctx.beginPath(); tctx.arc(bx, by, 14*dpr, 0, Math.PI*2); tctx.fill();
        } else {
          const rippleLocal = Math.max(0, Math.min(1, (elapsed - p.delay)/0.5));
          const dist = rippleLocal * p.dist * dpr * 3;
          const x = w*dpr*0.8 + Math.cos(p.angle)*dist;
          const y = cy + Math.sin(p.angle)*dist;
          const alpha = (1-rippleLocal) * 0.7;
          tctx.fillStyle = `rgba(${rgb},${alpha})`;
          tctx.beginPath(); tctx.arc(x,y,p.size*dpr,0,Math.PI*2); tctx.fill();
        }
      } else if (style === 'spotlight') {
        const radius = ease * Math.max(w,h) * dpr * 0.65;
        const alpha = Math.sin(local*Math.PI) * 0.85;
        const grad = tctx.createRadialGradient(cx,cy,0,cx,cy,radius);
        grad.addColorStop(0, `rgba(${rgb},${alpha})`);
        grad.addColorStop(0.7, `rgba(${rgb},${alpha*0.4})`);
        grad.addColorStop(1, `rgba(${rgb},0)`);
        tctx.fillStyle = grad;
        tctx.beginPath(); tctx.arc(cx,cy,radius,0,Math.PI*2); tctx.fill();
      } else if (style === 'runway') {
        const travel = ease * h * dpr;
        const alpha = Math.sin(local*Math.PI) * 0.5;
        tctx.fillStyle = `rgba(${rgb},${alpha})`;
        tctx.fillRect(p.x*dpr, h - travel, p.width2*dpr, travel);
      } else {
        const dist = ease * p.dist * dpr * 5;
        const x = cx + Math.cos(p.angle)*dist;
        const y = cy + Math.sin(p.angle)*dist;
        const alpha = (1-ease)*0.8;
        tctx.fillStyle = `rgba(${rgb},${alpha})`;
        tctx.save();
        tctx.translate(x,y); tctx.rotate(p.angle);
        tctx.fillRect(-p.size*dpr/2, -p.size*dpr/2, p.size*dpr, p.size*dpr);
        tctx.restore();
      }
    });

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ---------- navigation / life flow ---------- */
let hasSeenCue = false;
let currentLife = null;

function enterLife(life, originX, originY) {
  currentLife = life;
  initTilt();
  markLifeTried(life.id);
  const currentCardEl = document.querySelector(`.card[data-life-id="${life.id}"]`);
  if (currentCardEl) currentCardEl.classList.add('tried');

  document.documentElement.style.setProperty('--life-rgb', life.rgb);
  document.getElementById('transWord').textContent = life.name;
  document.getElementById('introTitle').textContent = life.worldIntroTitle;
  document.getElementById('introHook').textContent = life.introHook;
  document.getElementById('bleedText').textContent = life.bleed;
  document.getElementById('artifactLabel').textContent = life.artifactLabel;
  document.getElementById('narrativeP1').textContent = life.narrativeP1;
  document.getElementById('narrativeP2').textContent = life.narrativeP2;
  document.getElementById('realityMirror').textContent = life.realityMirror;

  playTransitionFx(life.transitionStyle, life.rgb, originX, originY);
  const trans = document.getElementById('transition');
  trans.classList.add('active');

  document.getElementById('pulseCue').style.display = hasSeenCue ? 'none' : 'block';
  hasSeenCue = true;

  setTimeout(() => {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('landingFooter').style.display = 'none';
    document.getElementById('grid').style.display = 'none';
    document.getElementById('experience').style.display = 'block';
    window.scrollTo(0, 0);
    stopLiquidField();
    startDepth(life);
    resetNarrative();
    armNarrativeReveal();
    buildTimeline(life);
    armTimelineReveal();
    renderPoster(life);
    armPosterReveal();
  }, 900);

  setTimeout(() => { trans.classList.remove('active'); }, 1600);
  setTimeout(() => { document.querySelectorAll('.card.tapped').forEach(c => c.classList.remove('tapped')); }, 1700);
}

function resetNarrative() {
  ['artifactLabel','narrativeP1','narrativeP2','narrativeClose'].forEach(id => document.getElementById(id).classList.remove('show'));
  document.getElementById('toTimelineBtn').classList.remove('show');
}

let narrativeObserver = null;
function armNarrativeReveal() {
  if (narrativeObserver) narrativeObserver.disconnect();
  const section = document.getElementById('narrativeSection');
  narrativeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playNarrativeReveal();
        narrativeObserver.disconnect();
      }
    });
  }, { threshold: 0.55 });
  narrativeObserver.observe(section);
}

function playNarrativeReveal() {
  const label = document.getElementById('artifactLabel');
  const p1 = document.getElementById('narrativeP1');
  const p2 = document.getElementById('narrativeP2');
  const close = document.getElementById('narrativeClose');
  const btn = document.getElementById('toTimelineBtn');

  label.classList.add('show');
  depthIntensity = 0.3;
  setTimeout(() => { p1.classList.add('show'); depthIntensity = 0.45; }, 400);
  setTimeout(() => { p2.classList.add('show'); depthIntensity = 0.7; }, 2400);
  setTimeout(() => { close.classList.add('show'); depthIntensity = 1; }, 4400);
  setTimeout(() => { btn.classList.add('show'); }, 5000);
}

document.getElementById('toTimelineBtn').addEventListener('click', () => {
  document.getElementById('timelineSection').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('toPosterBtn').addEventListener('click', () => {
  document.getElementById('posterSection').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('toRealityBtn').addEventListener('click', () => {
  document.getElementById('realitySection').scrollIntoView({ behavior: 'smooth' });
});

function buildTimeline(life) {
  const track = document.getElementById('timelineTrack');
  track.innerHTML = '';
  life.milestones.forEach((m) => {
    const row = document.createElement('div');
    row.className = 'milestone';
    row.innerHTML = `
      <div class="milestone-rail">
        <div class="milestone-dot"></div>
        <div class="milestone-line"></div>
      </div>
      <div class="milestone-body">
        <div class="milestone-age">${m.age}</div>
        <div class="milestone-text">${m.text}</div>
      </div>`;
    track.appendChild(row);
  });

  const motifCanvas = document.getElementById('timelineMotif');
  motifCanvas.classList.remove('show');
  const mctx = motifCanvas.getContext('2d');
  mctx.clearRect(0, 0, motifCanvas.width, motifCanvas.height);
  life.motif(mctx, 1.4, `rgb(${life.rgb})`);

  document.getElementById('toPosterBtn').classList.remove('show');
}

let timelineObserver = null;
function armTimelineReveal() {
  if (timelineObserver) timelineObserver.disconnect();
  const section = document.getElementById('timelineSection');
  timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playTimelineReveal();
        timelineObserver.disconnect();
      }
    });
  }, { threshold: 0.5 });
  timelineObserver.observe(section);
}

let posterObserver = null;
function armPosterReveal() {
  const canvas = document.getElementById('posterCanvas');
  canvas.classList.remove('developed');
  if (posterObserver) posterObserver.disconnect();
  const section = document.getElementById('posterSection');
  posterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Small delay so the reveal reads as the poster "developing"
        // once it's actually in frame, not before.
        setTimeout(() => canvas.classList.add('developed'), 200);
        posterObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  posterObserver.observe(section);
}

function playTimelineReveal() {
  const rows = document.querySelectorAll('#timelineTrack .milestone');
  const beatGap = 1800;
  rows.forEach((row, i) => {
    const base = i * beatGap;
    setTimeout(() => row.classList.add('show'), base);
    const line = row.querySelector('.milestone-line');
    if (line) setTimeout(() => line.classList.add('grow'), base + 300);
  });
  const afterRows = rows.length * beatGap;
  setTimeout(() => { document.getElementById('timelineMotif').classList.add('show'); }, afterRows + 300);
  setTimeout(() => { document.getElementById('toPosterBtn').classList.add('show'); }, afterRows + 1100);
}

document.getElementById('loopCue').addEventListener('click', exitExperience);

function exitExperience() {
  stopDepth();
  const trans = document.getElementById('transition');
  playTransitionFx(currentLife.transitionStyle, currentLife.rgb);
  trans.classList.add('active');
  setTimeout(() => {
    document.getElementById('experience').style.display = 'none';
    // Skip the landing hero on return trips — they've already read the setup.
    document.getElementById('grid').style.display = 'grid';
    window.scrollTo(0, 0);
  }, 700);
  setTimeout(() => { trans.classList.remove('active'); }, 1300);
}

/* ---------- poster canvas render ---------- */
function drawGrain(ctx, w, h, rgb) {
  ctx.save();
  for (let i=0;i<160;i++) {
    const x = Math.random()*w, y = Math.random()*h;
    const r = Math.random()*1.4+0.3;
    ctx.fillStyle = `rgba(${rgb},${Math.random()*0.5})`;
    ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
  }
  ctx.restore();
}

function renderPoster(life) {
  const canvas = document.getElementById('posterCanvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const rgb = life.rgb;

  document.fonts.ready.then(() => {
    // base
    ctx.fillStyle = '#08090b';
    ctx.fillRect(0,0,w,h);
    let g = ctx.createRadialGradient(w*0.3,h*0.2,0,w*0.3,h*0.2,w*0.9);
    g.addColorStop(0, `rgba(${rgb},0.16)`); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
    g = ctx.createRadialGradient(w*0.75,h*0.82,0,w*0.75,h*0.82,w*0.8);
    g.addColorStop(0, `rgba(${rgb},0.10)`); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,w,h);

    drawGrain(ctx, w, h, rgb);

    // top label
    ctx.textAlign = 'center';
    ctx.fillStyle = `rgb(${rgb})`;
    ctx.font = '300 26px "Work Sans", sans-serif';
    ctx.globalAlpha = 0.9;
    letterSpacedText(ctx, life.artifactLabel.toUpperCase(), w/2, h*0.07, 5);
    ctx.globalAlpha = 1;

    // motif — bigger, centered
    const motifScale = w * 0.0052;
    const motifBoxSize = 100 * motifScale;
    ctx.save();
    ctx.translate(w/2 - motifBoxSize/2, h*0.10);
    life.motif(ctx, motifScale, `rgb(${rgb})`);
    ctx.restore();

    // glass card — now with real depth: drop shadow, frosted fill, diagonal gloss, edge lighting
    const cardX = w*0.07, cardY = h*0.36, cardW = w*0.86, cardH = h*0.40;
    drawGlassCard(ctx, cardX, cardY, cardW, cardH, 26, rgb);

    const padX = cardX + 56;
    const textMaxWidth = cardW - 112;
    let cursorY = cardY + 92;

    ctx.textAlign = 'left';
    ctx.fillStyle = '#9a9da2';
    ctx.font = '300 30px "Work Sans", sans-serif';
    ctx.fillText(life.poster.lead, padX, cursorY);
    cursorY += 80;

    ctx.fillStyle = '#f2f1ee';
    ctx.font = '900 74px "Big Shoulders Display", sans-serif';
    ctx.fillText(life.poster.headline, padX, cursorY);
    cursorY += 96;

    // age / place row
    ctx.fillStyle = `rgb(${rgb})`;
    ctx.font = '700 56px "Big Shoulders Display", sans-serif';
    ctx.fillText(String(life.poster.age), padX, cursorY);
    const ageWidth = ctx.measureText(String(life.poster.age)).width;
    ctx.fillStyle = '#8a8d92';
    ctx.font = '300 22px "Work Sans", sans-serif';
    ctx.fillText('YEARS OLD', padX + ageWidth + 26, cursorY - 18);
    ctx.fillStyle = '#c9cbce';
    ctx.font = '400 24px "Work Sans", sans-serif';
    ctx.fillText(life.poster.place.toUpperCase(), padX + ageWidth + 26, cursorY + 16);
    cursorY += 84;

    // known for
    ctx.fillStyle = `rgb(${rgb})`;
    ctx.font = '300 19px "Work Sans", sans-serif';
    letterSpacedText(ctx, 'KNOWN FOR', padX, cursorY, 2.5, 'left');
    cursorY += 42;
    ctx.fillStyle = '#e7e5e0';
    ctx.font = '300 28px "Work Sans", sans-serif';
    cursorY = wrapText(ctx, life.poster.knownFor, padX, cursorY, textMaxWidth, 36);
    cursorY += 40;

    // life lesson
    ctx.fillStyle = `rgb(${rgb})`;
    ctx.font = '300 19px "Work Sans", sans-serif';
    letterSpacedText(ctx, 'LIFE LESSON', padX, cursorY, 2.5, 'left');
    cursorY += 42;
    ctx.fillStyle = '#e7e5e0';
    ctx.font = '300 28px "Work Sans", sans-serif';
    wrapText(ctx, life.poster.lifeLesson, padX, cursorY, textMaxWidth, 36);

    // generative art band — edge to edge, themed per life, replaces the old dead space
    const bandY = h*0.785, bandH = h*0.145;
    drawArtBand(ctx, 0, bandY, w, bandH, life.ambientStyle, rgb);

    // footer coordinates — sits quietly under the art band
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6c6f74';
    ctx.font = '300 18px "Work Sans", sans-serif';
    ctx.globalAlpha = 0.85;
    letterSpacedText(ctx, life.poster.footer.toUpperCase(), w/2, h*0.945, 2.5);
    ctx.globalAlpha = 1;

    // url credit — the only thing this quiet, small and subtle
    ctx.fillStyle = '#4a4d52';
    ctx.font = '300 18px "Work Sans", sans-serif';
    ctx.globalAlpha = 0.5;
    letterSpacedText(ctx, SITE_URL, w/2, h*0.975, 2.5);
    ctx.globalAlpha = 1;
  });
}

function drawGlassCard(ctx, x, y, w, h, r, rgb) {
  // drop shadow, gives the card real lift off the poster
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.55)';
  ctx.shadowBlur = 70;
  ctx.shadowOffsetY = 36;
  ctx.fillStyle = 'rgba(10,11,13,0.55)';
  roundRect(ctx, x, y, w, h, r);
  ctx.fill();
  ctx.restore();

  // frosted glass fill
  ctx.save();
  ctx.filter = 'blur(1.5px)';
  ctx.fillStyle = 'rgba(255,255,255,0.05)';
  roundRect(ctx, x, y, w, h, r);
  ctx.fill();
  ctx.restore();

  // diagonal gloss highlight, like light catching a glass surface
  ctx.save();
  roundRect(ctx, x, y, w, h, r);
  ctx.clip();
  const gloss = ctx.createLinearGradient(x, y, x + w*0.5, y + h*0.6);
  gloss.addColorStop(0, 'rgba(255,255,255,0.14)');
  gloss.addColorStop(0.4, 'rgba(255,255,255,0.03)');
  gloss.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gloss;
  ctx.fillRect(x, y, w, h);
  ctx.restore();

  // edge lighting — brighter top, softer bottom, so the border reads as a lit glass edge
  ctx.save();
  const edge = ctx.createLinearGradient(x, y, x, y + h);
  edge.addColorStop(0, `rgba(${rgb},0.6)`);
  edge.addColorStop(1, `rgba(${rgb},0.12)`);
  ctx.strokeStyle = edge;
  ctx.lineWidth = 2.5;
  roundRect(ctx, x, y, w, h, r);
  ctx.stroke();
  ctx.restore();
}

function drawArtBand(ctx, x, y, width, height, style, rgb) {
  ctx.save();
  ctx.beginPath(); ctx.rect(x, y, width, height); ctx.clip();
  ctx.fillStyle = '#050506';
  ctx.fillRect(x, y, width, height);

  if (style === 'stars') {
    const cloud1 = ctx.createRadialGradient(x+width*0.25, y+height*0.4, 0, x+width*0.25, y+height*0.4, width*0.28);
    cloud1.addColorStop(0, `rgba(${rgb},0.35)`); cloud1.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = cloud1; ctx.fillRect(x, y, width, height);
    const cloud2 = ctx.createRadialGradient(x+width*0.7, y+height*0.6, 0, x+width*0.7, y+height*0.6, width*0.22);
    cloud2.addColorStop(0, 'rgba(120,90,220,0.28)'); cloud2.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = cloud2; ctx.fillRect(x, y, width, height);
    ctx.beginPath();
    ctx.strokeStyle = `rgba(${rgb},0.5)`; ctx.lineWidth = 3;
    ctx.arc(x+width*0.5, y+height*1.7, width*0.95, Math.PI*1.15, Math.PI*1.85);
    ctx.stroke();
    for (let i=0;i<100;i++) {
      const sx = x+Math.random()*width, sy = y+Math.random()*height;
      const r = Math.random()*1.8+0.3;
      ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.8+0.2})`;
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI*2); ctx.fill();
    }
  } else if (style === 'bokeh') {
    for (let i=0;i<18;i++) {
      const bx = x + Math.random()*width, by = y + Math.random()*height;
      const r = 22 + Math.random()*55;
      const grad = ctx.createRadialGradient(bx, by, 0, bx, by, r);
      grad.addColorStop(0, `rgba(${rgb},${0.32+Math.random()*0.25})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI*2); ctx.fill();
    }
  } else if (style === 'blueprint') {
    ctx.strokeStyle = `rgba(${rgb},0.16)`; ctx.lineWidth = 1;
    const spacing = 42;
    for (let gx=x; gx<x+width; gx+=spacing) { ctx.beginPath(); ctx.moveTo(gx,y); ctx.lineTo(gx,y+height); ctx.stroke(); }
    for (let gy=y; gy<y+height; gy+=spacing) { ctx.beginPath(); ctx.moveTo(x,gy); ctx.lineTo(x+width,gy); ctx.stroke(); }
    ctx.strokeStyle = `rgba(${rgb},0.75)`; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x+width*0.12, y+height*0.85);
    ctx.lineTo(x+width*0.12, y+height*0.35);
    ctx.lineTo(x+width*0.30, y+height*0.15);
    ctx.lineTo(x+width*0.48, y+height*0.35);
    ctx.lineTo(x+width*0.48, y+height*0.85);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x+width*0.55, y+height*0.85);
    ctx.lineTo(x+width*0.55, y+height*0.25);
    ctx.lineTo(x+width*0.88, y+height*0.25);
    ctx.lineTo(x+width*0.88, y+height*0.85);
    ctx.stroke();
  } else if (style === 'clouds') {
    for (let i=0;i<7;i++) {
      const cx2 = x + (i/7)*width + Math.random()*40;
      const cy2 = y + height*0.3 + Math.random()*height*0.4;
      const grad = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, width*0.16);
      grad.addColorStop(0, `rgba(${rgb},0.25)`); grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad; ctx.fillRect(x, y, width, height);
    }
  } else if (style === 'streaks') {
    for (let i=0;i<16;i++) {
      const sy = y + Math.random()*height;
      const len = width*0.2 + Math.random()*width*0.35;
      const sx = x + Math.random()*(width - len);
      ctx.strokeStyle = `rgba(${rgb},${0.2+Math.random()*0.4})`;
      ctx.lineWidth = 1.5 + Math.random()*2;
      ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx+len, sy); ctx.stroke();
    }
  } else if (style === 'smoke') {
    for (let i=0;i<10;i++) {
      const sx = x + Math.random()*width, sy = y + Math.random()*height;
      const r = 30 + Math.random()*60;
      const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, r);
      grad.addColorStop(0, `rgba(${rgb},${0.18+Math.random()*0.15})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad; ctx.fillRect(x, y, width, height);
    }
  } else if (style === 'glow') {
    const g = ctx.createRadialGradient(x+width*0.5, y+height*0.5, 0, x+width*0.5, y+height*0.5, width*0.4);
    g.addColorStop(0, `rgba(${rgb},0.3)`); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = `rgba(${rgb},0.18)`; ctx.lineWidth = 1;
    for (let sy=y; sy<y+height; sy += 6) { ctx.beginPath(); ctx.moveTo(x, sy); ctx.lineTo(x+width, sy); ctx.stroke(); }
  } else if (style === 'flicker') {
    const g = ctx.createRadialGradient(x+width*0.5, y+height*0.6, 0, x+width*0.5, y+height*0.6, width*0.35);
    g.addColorStop(0, `rgba(${rgb},0.32)`); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x, y, width, height);
    for (let i=0;i<40;i++) {
      const sx = x+Math.random()*width, sy = y+Math.random()*height;
      ctx.fillStyle = `rgba(${rgb},${Math.random()*0.5})`;
      ctx.beginPath(); ctx.arc(sx, sy, Math.random()*1.6+0.4, 0, Math.PI*2); ctx.fill();
    }
  } else if (style === 'bio') {
    ctx.fillStyle = 'rgba(2,10,14,0.6)'; ctx.fillRect(x, y, width, height);
    for (let i=0;i<50;i++) {
      const sx = x+Math.random()*width, sy = y+Math.random()*height;
      const r = Math.random()*2+0.4;
      ctx.fillStyle = `rgba(${rgb},${Math.random()*0.7+0.15})`;
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI*2); ctx.fill();
    }
  } else if (style === 'ice') {
    for (let i=0;i<70;i++) {
      const sx = x+Math.random()*width, sy = y+Math.random()*height;
      ctx.strokeStyle = `rgba(${rgb},${Math.random()*0.4+0.1})`;
      ctx.lineWidth = 1;
      const len2 = 3+Math.random()*7;
      ctx.beginPath();
      ctx.moveTo(sx-len2, sy); ctx.lineTo(sx+len2, sy);
      ctx.moveTo(sx, sy-len2); ctx.lineTo(sx, sy+len2);
      ctx.stroke();
    }
  } else if (style === 'sparkle') {
    for (let i=0;i<60;i++) {
      const sx = x+Math.random()*width, sy = y+Math.random()*height;
      const r = Math.random()*1.6+0.3;
      ctx.fillStyle = `rgba(255,255,255,${Math.random()*0.8+0.1})`;
      ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI*2); ctx.fill();
    }
    for (let i=0;i<6;i++) {
      const sx = x+Math.random()*width, sy = y+Math.random()*height;
      ctx.strokeStyle = `rgba(${rgb},0.5)`; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(sx-8, sy); ctx.lineTo(sx+8, sy);
      ctx.moveTo(sx, sy-8); ctx.lineTo(sx, sy+8);
      ctx.stroke();
    }
  } else if (style === 'stagelight') {
    for (let i=0;i<4;i++) {
      const cx2 = x + (i+0.5)/4*width;
      const grad = ctx.createLinearGradient(cx2, y, cx2 - width*0.08, y+height);
      grad.addColorStop(0, `rgba(${rgb},0.28)`); grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(cx2 - width*0.03, y); ctx.lineTo(cx2 + width*0.03, y);
      ctx.lineTo(cx2 + width*0.1, y+height); ctx.lineTo(cx2 - width*0.1, y+height);
      ctx.closePath(); ctx.fill();
    }
  } else if (style === 'pulse') {
    for (let i=0;i<4;i++) {
      const r = (i+1)*width*0.11;
      ctx.strokeStyle = `rgba(${rgb},${0.35 - i*0.06})`;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(x+width*0.5, y+height*0.5, r, 0, Math.PI*2); ctx.stroke();
    }
  } else if (style === 'confetti') {
    for (let i=0;i<45;i++) {
      const sx = x+Math.random()*width, sy = y+Math.random()*height;
      ctx.save();
      ctx.translate(sx, sy);
      ctx.rotate(Math.random()*Math.PI*2);
      ctx.fillStyle = `rgba(${rgb},${Math.random()*0.6+0.2})`;
      ctx.fillRect(-3, -1.5, 6, 3);
      ctx.restore();
    }
  } else if (style === 'pages') {
    for (let i=0;i<8;i++) {
      const ly = y + height*0.15 + i*(height*0.09);
      const lw = width*(0.3+Math.random()*0.4);
      const lx = x + Math.random()*(width - lw);
      ctx.strokeStyle = `rgba(${rgb},${0.15+Math.random()*0.2})`;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(lx+lw, ly); ctx.stroke();
    }
  } else if (style === 'pitch') {
    ctx.strokeStyle = `rgba(${rgb},0.2)`; ctx.lineWidth = 1.5;
    for (let gx=x; gx<x+width; gx+=width/8) { ctx.beginPath(); ctx.moveTo(gx,y); ctx.lineTo(gx,y+height); ctx.stroke(); }
    ctx.strokeStyle = `rgba(${rgb},0.5)`; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x+width*0.5, y+height*0.5, height*0.3, 0, Math.PI*2); ctx.stroke();
  } else if (style === 'spotlight') {
    const g = ctx.createRadialGradient(x+width*0.5, y+height*0.5, 0, x+width*0.5, y+height*0.5, width*0.32);
    g.addColorStop(0, `rgba(${rgb},0.4)`); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.fillRect(x, y, width, height);
  } else if (style === 'runway') {
    for (let i=0;i<9;i++) {
      const bx = x + (i/9)*width + width*0.03;
      const grad = ctx.createLinearGradient(0, y, 0, y+height);
      grad.addColorStop(0, `rgba(${rgb},0.05)`); grad.addColorStop(0.5, `rgba(${rgb},0.3)`); grad.addColorStop(1, `rgba(${rgb},0.05)`);
      ctx.fillStyle = grad;
      ctx.fillRect(bx, y, width*0.02, height);
    }
  } else {
    const grad = ctx.createRadialGradient(x+width/2, y+height/2, 0, x+width/2, y+height/2, width*0.5);
    grad.addColorStop(0, `rgba(${rgb},0.25)`); grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad; ctx.fillRect(x, y, width, height);
  }

  const fadeTop = ctx.createLinearGradient(0, y, 0, y+height*0.22);
  fadeTop.addColorStop(0, 'rgba(8,9,11,0.85)'); fadeTop.addColorStop(1, 'rgba(8,9,11,0)');
  ctx.fillStyle = fadeTop; ctx.fillRect(x, y, width, height*0.22);
  const fadeBottom = ctx.createLinearGradient(0, y+height*0.78, 0, y+height);
  fadeBottom.addColorStop(0, 'rgba(8,9,11,0)'); fadeBottom.addColorStop(1, 'rgba(8,9,11,0.85)');
  ctx.fillStyle = fadeBottom; ctx.fillRect(x, y+height*0.78, width, height*0.22);

  ctx.restore();
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}

function letterSpacedText(ctx, text, x, y, spacing, align) {
  align = align || 'center';
  const chars = text.split('');
  let totalWidth = 0;
  chars.forEach(ch => totalWidth += ctx.measureText(ch).width + spacing);
  let startX = align === 'center' ? x - totalWidth/2 : x;
  ctx.textAlign = 'left';
  chars.forEach(ch => {
    ctx.fillText(ch, startX, y);
    startX += ctx.measureText(ch).width + spacing;
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let curY = y;
  words.forEach(word => {
    const test = line + word + ' ';
    if (ctx.measureText(test).width > maxWidth && line !== '') {
      ctx.fillText(line, x, curY);
      line = word + ' ';
      curY += lineHeight;
    } else {
      line = test;
    }
  });
  ctx.fillText(line, x, curY);
  return curY + lineHeight;
}

document.getElementById('downloadBtn').addEventListener('click', async () => {
  const canvas = document.getElementById('posterCanvas');
  const btn = document.getElementById('downloadBtn');
  const originalText = btn.textContent;

  const confirm = (label) => {
    btn.textContent = label;
    btn.classList.add('confirmed');
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove('confirmed');
    }, 2200);
  };

  canvas.toBlob(async (blob) => {
    const fileName = `elsewhere-${currentLife.id}.png`;
    const file = new File([blob], fileName, { type: 'image/png' });

    // Prefer the native OS share sheet — one tap, no login, lets someone
    // pick WhatsApp, Instagram, Messages, or save it, whatever they want.
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title: 'Elsewhere',
          text: `In a parallel world, I'm ${currentLife.poster.headline.replace("I'm ", '')}.`
        });
        confirm('Shared ✓');
        return;
      } catch (err) {
        // Cancelled or failed — fall through to direct download instead.
      }
    }

    // Fallback for browsers without file-sharing support (mostly desktop).
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
    confirm('Downloaded ✓');
  }, 'image/png');
});

/* ---------- kick things off ---------- */
playLandingReveal();
initLiquidField();
armFooterReveal();

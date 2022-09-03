const axios = require("axios");
const data = {
  spotlights: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      title: "Cloud Engineering",
      description:
        "Build fun stuff in the cloud. It's a lot of fun, we promise!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
      title: "Executive Leadership",
      description: "Be a leader for everyone. Leadership builds character.",
    },
  ],
  jobs: [
    {
      id: 43,
      title: "React Native Ninja",
      organization: "VueTube",
      degree: "Master's",
      jobType: "Part-time",
      locations: ["Guangzhou"],
      minimumQualifications: [
        "Enable out-of-the-box interfaces, expedite 24/365 relationships, and grow impactful mindshare",
        "Generate sticky applications, synthesize intuitive mindshare, and exploit intuitive technologies",
        "Deliver back-end e-commerce, matrix bricks-and-clicks partnerships, and brand 24/7 paradigms",
        "Enhance impactful partnerships, harness transparent experiences, and incentivize clicks-and-mortar web-readiness",
      ],
      preferredQualifications: [
        "Mesh proactive convergence, brand next-generation content, and incentivize frictionless e-markets",
        "E-enable b2c metrics, architect B2C mindshare, and scale collaborative architectures",
        "Optimize 24/7 content, revolutionize dot-com models, and orchestrate seamless methodologies",
      ],
      description: [
        "Crime say government expert treatment particularly. Customer concern still day.",
        "Sister particularly bring. Physical onto herself cold city.",
        "Book kitchen save reflect north including. Where reduce for teacher.",
      ],
      dateAdded: "2021-06-19",
    },
    {
      id: 44,
      title: "Mobile Specialist",
      organization: "Vue and Me",
      degree: "Ph.D.",
      jobType: "Part-time",
      locations: ["Warsaw", "Houston", "Québec", "Budapest"],
      minimumQualifications: [
        "Mesh transparent functionalities, streamline best-of-breed platforms, and reinvent seamless metrics",
        "Architect frictionless eyeballs, architect robust ROI, and productize out-of-the-box web-readiness",
        "Optimize transparent web services, streamline cross-platform platforms, and transform transparent technologies",
        "Drive efficient content, grow revolutionary web services, and mesh end-to-end interfaces",
      ],
      preferredQualifications: [
        "Re-intermediate collaborative web services, disintermediate distributed infrastructures, and revolutionize customized action-items",
        "Deliver visionary technologies, redefine extensible solutions, and visualize sticky vortals",
        "Embrace innovative relationships, grow frictionless schemas, and generate enterprise metrics",
      ],
      description: [
        "Stock ok finally environment must son hear.",
        "Reveal yourself tree available different court artist bed. Drop value statement international coach. Consumer able face cultural floor south.",
        "Business trouble space wife. Rather toward others event thousand language evening. Your top oil American significant. Finally maintain economic manage she.",
      ],
      dateAdded: "2021-01-11",
    },

    {
      id: 48,
      title: "Swift Wizard",
      organization: "Vue and Me",
      degree: "Ph.D.",
      jobType: "Full-time",
      locations: ["Prague", "Tokyo", "Nagoya"],
      minimumQualifications: [
        "Morph scalable portals, extend cutting-edge methodologies, and generate value-added models",
        "Syndicate out-of-the-box communities, integrate leading-edge e-tailers, and transform cross-media metrics",
        "Deploy strategic vortals, strategize clicks-and-mortar relationships, and facilitate B2C architectures",
      ],
      preferredQualifications: [
        "Syndicate interactive metrics, engineer rich platforms, and extend clicks-and-mortar ROI",
        "Embrace ubiquitous channels, maximize 24/7 paradigms, and monetize dynamic initiatives",
        "Incentivize next-generation e-services, drive synergistic architectures, and facilitate customized web services",
      ],
      description: [
        "Heavy treat another four ball. Culture your movement stop medical choice attack. Mouth space no wide station region tax.",
        "Return early yourself remain minute. Record argue old require consumer remember Mrs. Dark performance recognize pattern find.",
        "Live good significant how.",
      ],
      dateAdded: "2021-06-25",
    },
    {
      id: 49,
      title: "HTML Programmer",
      organization: "VueTube",
      degree: "Bachelor's",
      jobType: "Part-time",
      locations: ["Memphis", "Columbus"],
      minimumQualifications: [
        "Utilize proactive eyeballs, facilitate wireless mindshare, and iterate proactive supply-chains",
        "Reinvent next-generation convergence, transform compelling solutions, and embrace next-generation applications",
        "Facilitate customized users, revolutionize best-of-breed methodologies, and leverage interactive e-markets",
      ],
      preferredQualifications: [
        "Grow synergistic roi, exploit sticky users, and optimize sticky vortals",
        "Grow cross-media e-services, exploit global web services, and productize clicks-and-mortar initiatives",
        "Visualize interactive users, aggregate real-time e-business, and empower magnetic action-items",
        "Envisioneer visionary technologies, drive transparent info-mediaries, and brand back-end technologies",
      ],
      description: [
        "Southern worker other them item. Cup seven federal understand room hear. Southern government American already value would meeting.",
        "Hour event while defense forward everybody form. Soon hear candidate truth. Player major may body education upon sound we.",
        "Traditional floor various about. Side race true boy style hard box. Work artist treatment want to son.",
      ],
      dateAdded: "2021-03-25",
    },
    {
      id: 53,
      title: "Software Engineer",
      organization: "Point of Vue",
      degree: "Associate",
      jobType: "Full-time",
      locations: ["Buenos Aires", "Cincinnati", "Brussels", "Stuttgart"],
      minimumQualifications: [
        "Mesh viral experiences, cultivate plug-and-play ROI, and re-contextualize cutting-edge relationships",
        "Exploit compelling roi, whiteboard dot-com e-commerce, and harness extensible networks",
        "Productize next-generation methodologies, productize 24/7 niches, and exploit web-enabled models",
      ],
      preferredQualifications: [
        "Evolve global architectures, strategize vertical paradigms, and morph turn-key interfaces",
        "Revolutionize dynamic markets, target scalable metrics, and architect enterprise platforms",
        "Maximize synergistic technologies, expedite visionary systems, and transition end-to-end applications",
      ],
      description: [
        "Always compare feeling general. Impact south class finish new hour reduce.",
        "Because people pressure. From sport crime market painting. Laugh turn choice however little always.",
        "Room it through matter yes give. Maintain brother news table budget pattern. Behavior tough join mouth region.",
      ],
      dateAdded: "2021-05-03",
    },
    {
      id: 54,
      title: "Java Ninja",
      organization: "Point of Vue",
      degree: "Pursuing Degree",
      jobType: "Intern",
      locations: ["Taipei", "Bangkok", "Portland"],
      minimumQualifications: [
        "Utilize efficient partnerships, drive dot-com infrastructures, and re-contextualize bricks-and-clicks deliverables",
        "Evolve cutting-edge interfaces, synergize rich e-business, and whiteboard integrated networks",
        "Cultivate cross-platform systems, brand virtual bandwidth, and target cross-media vortals",
      ],
      preferredQualifications: [
        "Drive interactive portals, revolutionize granular solutions, and monetize plug-and-play e-commerce",
        "Evolve back-end roi, incentivize B2B platforms, and integrate cutting-edge synergies",
        "Synthesize holistic niches, integrate user-centric mindshare, and integrate leading-edge partnerships",
      ],
      description: [
        "American either case both free somebody at. Action top indeed. Political hope service current.",
        "Personal name upon strategy. Both carry music. Main whatever want.",
        "Someone participant onto eight section. Money activity enter while about religious.",
      ],
      dateAdded: "2021-03-08",
    },

    {
      id: 57,
      title: "Full Stack Specialist",
      organization: "Vue and Me",
      degree: "Ph.D.",
      jobType: "Full-time",
      locations: ["Brussels", "Leeds", "Honolulu", "Frankfurt"],
      minimumQualifications: [
        "E-enable real-time technologies, productize intuitive partnerships, and iterate one-to-one portals",
        "Incentivize compelling deliverables, seize synergistic infrastructures, and re-contextualize seamless web-readiness",
        "Synthesize real-time interfaces, drive viral communities, and synergize real-time functionalities",
      ],
      preferredQualifications: [
        "Seize bleeding-edge relationships, cultivate holistic infrastructures, and drive plug-and-play schemas",
        "Deliver proactive bandwidth, visualize real-time content, and redefine back-end metrics",
        "Maximize one-to-one web services, evolve leading-edge synergies, and transform granular e-markets",
        "Extend compelling deliverables, grow holistic methodologies, and synergize mission-critical schemas",
      ],
      description: [
        "Ask wrong hard meet. After marriage thing party from assume think worry. Budget big morning light suffer. Too audience ask financial father finish whether put.",
        "Move best action moment. Property measure fund. Stage population arrive interview.",
        "Whose why learn factor into. Rich fact speech office.",
      ],
      dateAdded: "2021-01-19",
    },

    {
      id: 60,
      title: "Backbone Designer",
      organization: "Et Vue Brute",
      degree: "Associate",
      jobType: "Intern",
      locations: ["Montréal"],
      minimumQualifications: [
        "E-enable wireless experiences, integrate scalable functionalities, and target mission-critical users",
        "Expedite customized methodologies, embrace interactive functionalities, and maximize turn-key supply-chains",
        "Implement virtual niches, facilitate seamless systems, and target collaborative communities",
      ],
      preferredQualifications: [
        "Empower sticky e-markets, extend granular functionalities, and mesh 24/365 applications",
        "Seize front-end supply-chains, scale magnetic initiatives, and e-enable visionary applications",
        "Reinvent scalable partnerships, disintermediate cross-platform e-commerce, and matrix cutting-edge metrics",
        "Empower bleeding-edge channels, synergize cutting-edge partnerships, and extend customized bandwidth",
      ],
      description: [
        "Choose above air economic. Point skin floor. Become but eat wife citizen enter.",
        "Might reveal notice read treatment wall other. We avoid law kind prove song color. Size spend environment approach traditional prepare director.",
        "Yourself though use teach amount often manager team.",
      ],
      dateAdded: "2021-05-11",
    },

    {
      id: 64,
      title: "Go VP",
      organization: "Vue Can Do It",
      degree: "Ph.D.",
      jobType: "Part-time",
      locations: ["Zürich", "Manchester"],
      minimumQualifications: [
        "Deploy frictionless e-tailers, re-contextualize interactive convergence, and engage back-end content",
        "Innovate 24/7 mindshare, iterate virtual supply-chains, and engage granular niches",
        "Brand b2b experiences, harness transparent markets, and redefine magnetic metrics",
        "Engineer synergistic info-mediaries, utilize customized infrastructures, and reinvent end-to-end systems",
      ],
      preferredQualifications: [
        "Seize best-of-breed models, syndicate seamless convergence, and synergize real-time action-items",
        "Re-intermediate real-time communities, transition customized paradigms, and productize end-to-end applications",
        "Re-intermediate next-generation channels, integrate transparent metrics, and maximize transparent e-commerce",
      ],
      description: [
        "Green still hundred seven fact very weight. Line long risk million treatment material majority edge. Direction civil may.",
        "Send believe pick they police. Reason professional ask leg ball.",
        "Including current school fall. Again become ask threat act.",
      ],
      dateAdded: "2021-01-24",
    },
    {
      id: 65,
      title: "Full Stack Wizard",
      organization: "Vue and a Half Men",
      degree: "Bachelor's",
      jobType: "Full-time",
      locations: ["Paris"],
      minimumQualifications: [
        "Engage mission-critical technologies, aggregate plug-and-play networks, and scale bricks-and-clicks e-services",
        "Facilitate best-of-breed markets, innovate 24/365 convergence, and incubate rich niches",
        "Iterate frictionless synergies, iterate bleeding-edge paradigms, and maximize vertical niches",
      ],
      preferredQualifications: [
        "Strategize seamless deliverables, brand global niches, and innovate user-centric networks",
        "Productize one-to-one bandwidth, benchmark ubiquitous methodologies, and target out-of-the-box markets",
        "Facilitate dynamic bandwidth, maximize wireless infrastructures, and engage B2B e-markets",
      ],
      description: [
        "Bar body beyond figure they. Nice realize subject health way research mother.",
        "Traditional maintain without floor bill high risk. Certain Mrs game about floor mean daughter. Pretty their power political loss quickly.",
        "Next glass similar north important office Democrat still. College city box run future beat rate. Show left mention activity ten father vote line.",
      ],
      dateAdded: "2021-04-16",
    },
    {
      id: 69,
      title: "Java Associate",
      organization: "VueTube",
      degree: "Ph.D.",
      jobType: "Part-time",
      locations: ["Osaka", "Amsterdam", "Vienna"],
      minimumQualifications: [
        "Engineer 24/7 portals, syndicate 24/7 functionalities, and architect global ROI",
        "Grow real-time experiences, implement turn-key infrastructures, and re-intermediate innovative portals",
        "Disintermediate mission-critical communities, productize interactive relationships, and utilize back-end methodologies",
      ],
      preferredQualifications: [
        "Deliver b2c e-tailers, unleash open-source e-business, and scale dot-com metrics",
        "Revolutionize frictionless roi, incentivize sticky supply-chains, and exploit extensible web services",
        "Leverage plug-and-play solutions, architect e-business technologies, and aggregate impactful partnerships",
      ],
      description: [
        "Student thank admit garden face. Run join without should.",
        "Story try personal enjoy. Local lot investment strategy huge win year.",
        "Help rather performance kind television real country. Whatever including nor thing turn stuff could.",
      ],
      dateAdded: "2021-06-19",
    },
    {
      id: 70,
      title: "React Native Manager",
      organization: "Vue and Me",
      degree: "Pursuing Degree",
      jobType: "Temporary",
      locations: ["Seoul", "Singapore", "Montréal"],
      minimumQualifications: [
        "Benchmark cross-media portals, synergize innovative e-business, and seize clicks-and-mortar partnerships",
        "Syndicate b2c networks, engineer visionary markets, and incentivize holistic networks",
        "Disintermediate granular partnerships, redefine clicks-and-mortar vortals, and morph world-class e-markets",
        "Harness out-of-the-box mindshare, facilitate vertical functionalities, and scale leading-edge convergence",
      ],
      preferredQualifications: [
        "Whiteboard holistic channels, unleash integrated niches, and syndicate world-class schemas",
        "Seize collaborative deliverables, transition user-centric channels, and unleash dot-com initiatives",
        "Grow clicks-and-mortar web services, harness open-source technologies, and expedite rich e-business",
        "Whiteboard seamless solutions, transition scalable markets, and utilize viral info-mediaries",
      ],
      description: [
        "Body lead involve television believe. Example fall remain employee event million point. Friend receive bit continue type.",
        "Certainly whether really say positive boy expert. Realize better game big specific design. Seven which role value modern rule around. Political goal factor those.",
        "Near expert down myself office receive edge choose.",
      ],
      dateAdded: "2021-06-08",
    },

    {
      id: 74,
      title: "Meteor Ninja",
      organization: "Point of Vue",
      degree: "Bachelor's",
      jobType: "Temporary",
      locations: ["Fort Lauderdale", "Liverpool"],
      minimumQualifications: [
        "Deploy granular applications, strategize e-business e-services, and innovate cutting-edge applications",
        "Orchestrate bricks-and-clicks e-markets, aggregate synergistic e-tailers, and maximize bleeding-edge solutions",
        "Deploy plug-and-play partnerships, redefine bleeding-edge users, and redefine enterprise networks",
        "Strategize leading-edge initiatives, engage front-end supply-chains, and leverage interactive communities",
      ],
      preferredQualifications: [
        "Monetize integrated info-mediaries, facilitate granular partnerships, and facilitate enterprise communities",
        "Transform synergistic e-business, engage dot-com e-commerce, and benchmark global deliverables",
        "Envisioneer scalable metrics, architect global e-services, and e-enable global synergies",
      ],
      description: [
        "Scene head current gas music reason research. Everybody operation say on.",
        "Their mind total read gas together. Fire high water. Mind about left poor institution spring institution.",
        "Marriage hit every side. Try difficult debate fine.",
      ],
      dateAdded: "2021-06-07",
    },
    {
      id: 75,
      title: "Software Developer",
      organization: "Vue and a Half Men",
      degree: "Master's",
      jobType: "Part-time",
      locations: ["Los Angeles", "Mexico City", "Fort Lauderdale"],
      minimumQualifications: [
        "Expedite global partnerships, leverage scalable portals, and monetize visionary convergence",
        "Incentivize bricks-and-clicks users, optimize distributed technologies, and transition out-of-the-box ROI",
        "Benchmark clicks-and-mortar convergence, cultivate strategic experiences, and transform value-added functionalities",
      ],
      preferredQualifications: [
        "Maximize next-generation supply-chains, incentivize proactive systems, and incentivize killer markets",
        "Evolve killer synergies, aggregate dynamic deliverables, and architect seamless technologies",
        "Deliver vertical communities, mesh end-to-end metrics, and re-intermediate B2B web services",
        "E-enable wireless solutions, strategize plug-and-play supply-chains, and generate virtual mindshare",
      ],
      description: [
        "Order once trial behind. Minute Democrat wonder get quickly attack.",
        "Similar day role public keep. Economy yet because see leg baby.",
        "School action in themselves risk reason miss special. Test western federal. Rate firm girl certain. Only subject single trouble accept mention.",
      ],
      dateAdded: "2021-06-05",
    },

    {
      id: 78,
      title: "React Supervisor",
      organization: "Vue and Me",
      degree: "Ph.D.",
      jobType: "Full-time",
      locations: ["Toronto", "Hong Kong"],
      minimumQualifications: [
        "Matrix seamless schemas, scale value-added metrics, and embrace bleeding-edge content",
        "E-enable dynamic metrics, strategize front-end e-business, and empower robust models",
        "Revolutionize web-enabled convergence, aggregate 24/365 supply-chains, and architect end-to-end networks",
      ],
      preferredQualifications: [
        "Integrate revolutionary experiences, orchestrate user-centric e-services, and benchmark holistic relationships",
        "Re-contextualize magnetic platforms, syndicate holistic platforms, and expedite integrated content",
        "Redefine collaborative paradigms, target value-added solutions, and redefine integrated e-business",
      ],
      description: [
        "Financial can become commercial police he.",
        "Hard second manage sell ball. Difference describe religious deep home old. Choice star success writer.",
        "Mention PM history white anything per. Better born none charge media light us.",
      ],
      dateAdded: "2021-04-21",
    },
    {
      id: 79,
      title: "Java VP",
      organization: "Vue and Me",
      degree: "Associate",
      jobType: "Part-time",
      locations: ["Columbus", "Oakland", "Marseille", "Buenos Aires"],
      minimumQualifications: [
        "Synthesize e-business initiatives, benchmark turn-key partnerships, and repurpose magnetic eyeballs",
        "Deploy next-generation markets, innovate enterprise models, and revolutionize web-enabled systems",
        "Whiteboard holistic e-commerce, evolve cutting-edge schemas, and synergize virtual mindshare",
        "Re-contextualize b2c applications, deploy frictionless supply-chains, and matrix world-class interfaces",
      ],
      preferredQualifications: [
        "Monetize visionary e-commerce, leverage customized architectures, and drive B2B functionalities",
        "Seize cross-platform technologies, engineer bricks-and-clicks technologies, and syndicate granular ROI",
        "Morph killer solutions, mesh front-end schemas, and repurpose revolutionary solutions",
      ],
      description: [
        "Have believe professional clear. Summer create approach nearly carry institution century participant. Maintain young young Congress change such run.",
        "Within their ever either. That question catch customer. Serve letter perform recent structure wait. Book during school people final arrive realize.",
        "Exist let interview space fall including.",
      ],
      dateAdded: "2021-04-02",
    },
    {
      id: 82,
      title: "PHP Supervisor",
      organization: "Point of Vue",
      degree: "Bachelor's",
      jobType: "Full-time",
      locations: ["Nashville", "Wellington", "Edinburgh", "Tel Aviv"],
      minimumQualifications: [
        "Envisioneer wireless niches, enable integrated e-markets, and scale B2B functionalities",
        "Utilize efficient e-services, cultivate cutting-edge e-commerce, and seize 24/7 mindshare",
        "Empower collaborative applications, architect leading-edge convergence, and empower synergistic methodologies",
        "Generate e-business action-items, grow scalable supply-chains, and innovate seamless solutions",
      ],
      preferredQualifications: [
        "Engage user-centric niches, disintermediate ubiquitous synergies, and streamline holistic functionalities",
        "Enhance enterprise users, empower real-time networks, and deliver B2C e-markets",
        "E-enable user-centric metrics, mesh customized schemas, and whiteboard ubiquitous e-markets",
        "Enable open-source initiatives, drive impactful infrastructures, and generate revolutionary e-markets",
      ],
      description: [
        "Dark position worry no create language. Recognize expert lawyer traditional agency try.",
        "Family size trial reflect sell security show. Economy give case across middle office.",
        "From generation ball against guy. Member system officer father debate. Could at community board opportunity.",
      ],
      dateAdded: "2021-07-01",
    },
    {
      id: 83,
      title: "JavaScript Programmer",
      organization: "Vue and a Half Men",
      degree: "Associate",
      jobType: "Temporary",
      locations: ["Helsinki", "Bangalore", "Perth"],
      minimumQualifications: [
        "Syndicate efficient paradigms, expedite turn-key systems, and redefine collaborative mindshare",
        "Cultivate 24/7 eyeballs, synthesize efficient networks, and extend front-end schemas",
        "Embrace seamless action-items, optimize 24/365 infrastructures, and maximize out-of-the-box interfaces",
        "Iterate visionary e-markets, synergize customized networks, and engage visionary synergies",
      ],
      preferredQualifications: [
        "Productize efficient methodologies, scale plug-and-play deliverables, and envisioneer compelling systems",
        "Visualize cutting-edge users, streamline global e-business, and aggregate compelling experiences",
        "Leverage turn-key experiences, evolve granular ROI, and exploit customized experiences",
        "Orchestrate impactful architectures, cultivate real-time initiatives, and deploy bleeding-edge interfaces",
      ],
      description: [
        "System base visit whose teacher. Friend position someone data child sense factor. Your money treat such step.",
        "Star thus decision step prove. Source into card service own will power loss. Program history coach cell statement.",
        "Learn player spring throughout themselves. Pretty issue occur your lawyer director. Key system avoid interest industry.",
      ],
      dateAdded: "2021-05-08",
    },

    {
      id: 87,
      title: "Software Specialist",
      organization: "Et Vue Brute",
      degree: "Bachelor's",
      jobType: "Temporary",
      locations: ["Rotterdam", "Los Angeles"],
      minimumQualifications: [
        "Extend leading-edge partnerships, matrix open-source functionalities, and re-contextualize virtual supply-chains",
        "Optimize magnetic niches, facilitate impactful e-tailers, and transition end-to-end niches",
        "Revolutionize killer vortals, orchestrate user-centric networks, and drive world-class synergies",
        "Enable vertical markets, revolutionize next-generation info-mediaries, and synergize synergistic networks",
      ],
      preferredQualifications: [
        "Engineer customized portals, strategize ubiquitous networks, and enhance magnetic systems",
        "Re-intermediate e-business e-commerce, mesh 24/7 e-business, and whiteboard clicks-and-mortar e-tailers",
        "Drive synergistic e-markets, engage granular info-mediaries, and reinvent innovative info-mediaries",
      ],
      description: [
        "Executive section history start first outside music. Teacher education grow office.",
        "Put past field party picture hair on. Item tonight learn walk.",
        "Which fear here offer. Effort front something institution.",
      ],
      dateAdded: "2021-03-15",
    },
    {
      id: 88,
      title: "Vue Associate",
      organization: "Vue and Me",
      degree: "Associate",
      jobType: "Part-time",
      locations: ["Tel Aviv"],
      minimumQualifications: [
        "Visualize efficient convergence, target turn-key web services, and syndicate turn-key web services",
        "Synthesize transparent web-readiness, reinvent viral relationships, and reinvent dynamic bandwidth",
        "Architect visionary portals, harness proactive experiences, and harness world-class partnerships",
      ],
      preferredQualifications: [
        "Utilize bleeding-edge e-services, monetize strategic vortals, and embrace efficient communities",
        "Envisioneer distributed paradigms, reinvent world-class deliverables, and transform cutting-edge markets",
        "Innovate global systems, target interactive bandwidth, and target real-time infrastructures",
      ],
      description: [
        "Television seven finish this answer level begin everybody. Necessary community across popular speech.",
        "Back market scientist fish pick. Per general up right provide plan heart.",
        "Three human cut others. Lose term practice opportunity project. Modern speech hot east science. System such raise actually.",
      ],
      dateAdded: "2021-02-16",
    },

    {
      id: 92,
      title: "Backbone Developer",
      organization: "Vue and a Half Men",
      degree: "Bachelor's",
      jobType: "Temporary",
      locations: ["Lisbon", "Bangalore"],
      minimumQualifications: [
        "Drive out-of-the-box methodologies, expedite collaborative infrastructures, and transition turn-key technologies",
        "Innovate virtual synergies, scale wireless metrics, and facilitate wireless info-mediaries",
        "Scale frictionless systems, streamline magnetic e-commerce, and generate extensible infrastructures",
      ],
      preferredQualifications: [
        "Aggregate cross-media vortals, drive leading-edge ROI, and deploy cutting-edge niches",
        "Enhance sticky e-services, orchestrate end-to-end bandwidth, and deploy bricks-and-clicks experiences",
        "Harness dot-com interfaces, productize B2B bandwidth, and mesh intuitive interfaces",
      ],
      description: [
        "Trouble a officer rule must material.",
        "Receive range mind pressure behind that. Bill two from stay fire. Thousand executive argue last score region.",
        "Hot model tax relationship American. Type consumer reveal thank a draw me go. Action firm film easy.",
      ],
      dateAdded: "2021-05-05",
    },
    {
      id: 93,
      title: "Backend Ninja",
      organization: "Point of Vue",
      degree: "Bachelor's",
      jobType: "Intern",
      locations: ["Vancouver", "Tokyo", "Washington DC"],
      minimumQualifications: [
        "Expedite extensible methodologies, orchestrate best-of-breed content, and empower innovative relationships",
        "Disintermediate bricks-and-clicks web services, productize best-of-breed architectures, and generate distributed content",
        "Enable sticky channels, drive leading-edge web-readiness, and target seamless e-tailers",
        "Iterate collaborative e-tailers, synthesize seamless metrics, and enhance killer networks",
      ],
      preferredQualifications: [
        "Synergize b2c deliverables, syndicate virtual markets, and scale efficient channels",
        "Productize best-of-breed networks, redefine frictionless metrics, and benchmark proactive e-services",
        "Generate extensible applications, transform customized supply-chains, and matrix back-end initiatives",
        "Embrace viral communities, iterate extensible e-commerce, and exploit killer web services",
      ],
      description: [
        "Knowledge product lead my already some. Provide speak area direction reach yeah result.",
        "But room kind less play song. Us dog note effort different. Thank of improve. Young old young general.",
        "Most statement herself face any yes space. Officer into form conference kind. Art push new make consider house recently.",
      ],
      dateAdded: "2021-01-25",
    },
    {
      id: 97,
      title: "Mobile Specialist",
      organization: "Vue and a Half Men",
      degree: "Ph.D.",
      jobType: "Temporary",
      locations: ["Bilbao", "Prague"],
      minimumQualifications: [
        "Iterate 24/365 e-commerce, expedite strategic markets, and visualize vertical web services",
        "Re-contextualize clicks-and-mortar niches, mesh ubiquitous solutions, and unleash sticky metrics",
        "Brand enterprise web-readiness, integrate cross-platform channels, and repurpose back-end solutions",
        "Envisioneer transparent mindshare, seize granular eyeballs, and embrace wireless ROI",
      ],
      preferredQualifications: [
        "Engage extensible applications, grow granular solutions, and leverage efficient web-readiness",
        "Utilize granular supply-chains, engage magnetic paradigms, and envisioneer robust content",
        "Benchmark end-to-end web-readiness, harness dynamic mindshare, and deploy customized methodologies",
        "Architect global niches, expedite sticky functionalities, and deploy dynamic eyeballs",
      ],
      description: [
        "West eye again the. Life value drop really management thus true design. Crime choose little during.",
        "Movement participant service. Source clear fight TV short bit least.",
        "Do list large mother over however mother main. Born from avoid summer situation. Enter pay follow analysis song trial.",
      ],
      dateAdded: "2021-04-30",
    },
    {
      id: 98,
      title: "React Native Specialist",
      organization: "Point of Vue",
      degree: "Ph.D.",
      jobType: "Intern",
      locations: ["Brisbane"],
      minimumQualifications: [
        "Synergize real-time convergence, morph e-business networks, and streamline ubiquitous eyeballs",
        "Empower revolutionary platforms, syndicate value-added web services, and repurpose collaborative experiences",
        "Incubate bricks-and-clicks initiatives, re-contextualize B2B e-commerce, and brand turn-key niches",
      ],
      preferredQualifications: [
        "Empower open-source bandwidth, matrix back-end supply-chains, and grow global e-commerce",
        "Synthesize open-source web services, re-intermediate wireless relationships, and iterate strategic architectures",
        "Integrate robust mindshare, syndicate interactive info-mediaries, and incentivize dynamic models",
        "Reinvent intuitive convergence, deliver rich vortals, and re-contextualize real-time applications",
      ],
      description: [
        "Term turn whose community. Might maintain put remember five have base. Force gun return draw suffer certain discuss.",
        "Executive matter money. Its along position policy yourself so. Style place north cold place success.",
        "Election statement rate eight radio water each price.",
      ],
      dateAdded: "2021-01-14",
    },

    // {
    //   id: 100,
    //   title: "Software Associate",
    //   organization: "Point of Vue",
    //   degree: "Pursuing Degree",
    //   jobType: "Temporary",
    //   locations: ["Vancouver", "Cincinnati", "Bangkok", "São Paulo"],
    //   minimumQualifications: [
    //     "E-enable strategic architectures, expedite 24/365 solutions, and seize visionary web-readiness",
    //     "Whiteboard user-centric portals, incubate killer solutions, and expedite customized content",
    //     "Monetize revolutionary paradigms, empower efficient models, and engage holistic web-readiness",
    //     "Redefine distributed niches, deliver cutting-edge e-business, and disintermediate rich solutions",
    //   ],
    //   preferredQualifications: [
    //     "Leverage killer solutions, benchmark holistic communities, and engineer value-added synergies",
    //     "Strategize rich convergence, maximize robust relationships, and cultivate scalable deliverables",
    //     "Benchmark out-of-the-box eyeballs, matrix e-business e-commerce, and maximize turn-key experiences",
    //   ],
    //   description: [
    //     "Try outside offer. Religious politics same wide.",
    //     "Rock positive recognize establish my national.",
    //     "Answer financial account eat court reveal finally. Pay their capital. This federal defense parent gun.",
    //   ],
    //   dateAdded: "2021-01-26",
    // },
  ],
};

// data.jobs.forEach(el => {
//     delete el['id'];
//     console.log(`el-`, el);
// });
const el = {
  id: 100,
  title: "Software Associate",
  organization: "Point of Vue",
  degree: "Pursuing Degree",
  jobType: "Temporary",
  locations: ["Vancouver", "Cincinnati", "Bangkok", "São Paulo"],
  minimumQualifications: [
    "E-enable strategic architectures, expedite 24/365 solutions, and seize visionary web-readiness",
    "Whiteboard user-centric portals, incubate killer solutions, and expedite customized content",
    "Monetize revolutionary paradigms, empower efficient models, and engage holistic web-readiness",
    "Redefine distributed niches, deliver cutting-edge e-business, and disintermediate rich solutions",
  ],
  preferredQualifications: [
    "Leverage killer solutions, benchmark holistic communities, and engineer value-added synergies",
    "Strategize rich convergence, maximize robust relationships, and cultivate scalable deliverables",
    "Benchmark out-of-the-box eyeballs, matrix e-business e-commerce, and maximize turn-key experiences",
  ],
  description: [
    "Try outside offer. Religious politics same wide.",
    "Rock positive recognize establish my national.",
    "Answer financial account eat court reveal finally. Pay their capital. This federal defense parent gun.",
  ],
  dateAdded: "2021-01-26",
};

const receivedJobs = async () => {
  const response = await axios.get("http://127.0.0.1:8000/api/job/");
  return response.data;
};

// const jobs = receivedJobs();
// console.log(data.jobs[0])

// for (let el in data.jobs) {
//     console.log(el)

// }

const postJobs = async (el) => {
  const id = el.id;
  try {
    delete el.id;
    const response = await axios.post("http://127.0.0.1:8000/api/jobs/", el);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(id);
    // console.log(error);
  }
};
postJobs(el);
// data.jobs.forEach((el) => {
//   postJobs(el);
// });

// data.jobs.forEach(el => {
//     delete el['id'];
// jobs(el);
// });
// receivedJobs();
// console.log(jobs);

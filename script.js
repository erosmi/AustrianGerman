const levelInfo = {
  A1: { label: 'Getting started', goal: 'Introduce yourself, ask simple questions, and handle familiar everyday situations.' },
  A2: { label: 'Everyday basics', goal: 'Manage routine exchanges, make plans, and describe your immediate world.' },
  B1: { label: 'Independent', goal: 'Explain experiences, give reasons, and keep a conversation moving.' },
  B2: { label: 'Confident', goal: 'Make a clear case, weigh options, and follow more nuanced conversation.' },
  C1: { label: 'Fluent & flexible', goal: 'Speak precisely, adapt your tone, and connect ideas with ease.' },
  C2: { label: 'Near-native range', goal: 'Handle subtle meanings, regional flavor, and complex discussion.' }
};

const activities = {
  A1: {
    speaking: [
      { title: 'At the bakery', description: 'You’re at a Bäckerei in Vienna. Read the situation, then answer out loud in German.', prompt: 'Grüß Gott! Was darf’s denn sein?', support: 'Order two bread rolls and ask how much they cost.', model: 'Grüß Gott! Ich hätte gern zwei Semmeln, bitte. Was macht das?' },
      { title: 'Meeting a neighbor', description: 'Say your name, where you’re from, and ask your neighbor’s name.', prompt: 'Servus! Ich bin Lukas. Wie heißt du?', support: 'Answer with your name and one simple detail about yourself.', model: 'Grüß dich, ich heiße Maya. Ich komme aus Kanada. Und du?' }
    ],
    listening: [{ title: 'A quick order', description: 'Listen to this original café exchange. First listen without reading, then choose what the guest orders.', text: 'Grüß Gott. Einen Verlängerten und ein Kipferl, bitte. Zum Hiertrinken? Ja, danke.', question: 'What does the guest order?', options: ['A coffee and a croissant-shaped roll', 'A tea and a slice of cake', 'Two coffees to take away'], answer: 0 }],
    reading: [{ title: 'A note on the fridge', description: 'Read this short everyday message and check the main detail.', text: 'Hallo Anna! Ich bin beim Bäcker. Bin um zehn wieder da. Das Sackerl mit den Äpfeln steht in der Küche. Bis gleich, Mama', question: 'Where is the bag of apples?', options: ['At the bakery', 'In the kitchen', 'In Anna’s room'], answer: 1 }],
    writing: [{ title: 'A friendly introduction', description: 'Write a few simple sentences to introduce yourself to a new neighbor.', prompt: 'Wie heißt du? Woher kommst du? Was machst du gern?', minWords: 12, focus: ['Ich heiße …', 'Ich komme aus …'], sample: 'Grüß dich! Ich heiße Maya und komme aus Kanada. Ich wohne seit einem Monat in Wien. In meiner Freizeit gehe ich gern spazieren.' }]
  },
  A2: {
    speaking: [
      { title: 'Making weekend plans', description: 'Your friend asks what you’d like to do. Suggest a plan and agree on a time.', prompt: 'Hast du am Samstag schon was vor? Wie wär’s mit einem Spaziergang?', support: 'Say whether you’re free, suggest a place, and ask when to meet.', model: 'Nein, ich hab noch nichts vor. Wir könnten an der Donau spazieren gehen. Passt dir der Vormittag?' },
      { title: 'At the market', description: 'You want fruit at a market stand. Ask for a quantity and the price.', prompt: 'Grüß Sie! Was darf’s sein? Die Marillen sind heute besonders gut.', support: 'Ask for half a kilo and whether you can taste one.', model: 'Grüß Sie! Ich hätte gern ein halbes Kilo Marillen. Darf ich eine kosten?' }
    ],
    listening: [{ title: 'Changing the plan', description: 'Listen to this original voice message. What change does the speaker suggest?', text: 'Servus, ich schaff’s heute leider nicht um sechs. Können wir uns eine halbe Stunde später treffen? Beim Würstelstand neben der U-Bahn wär’s gemütlicher.', question: 'What does the speaker suggest?', options: ['Meet 30 minutes later by the underground station', 'Cancel and meet another day', 'Meet at the same time at the station'], answer: 0 }],
    reading: [{ title: 'A notice in the stairwell', description: 'Read the building notice and find out what residents need to do.', text: 'Liebe Hausbewohnerinnen und Hausbewohner! Am Donnerstag wird zwischen 8 und 12 Uhr das Wasser abgedreht. Bitte füllen Sie vorher genug Wasser ab. Die Hausverwaltung ist bei Fragen unter der bekannten Nummer erreichbar. Danke für Ihr Verständnis!', question: 'When will the water be turned off?', options: ['Wednesday morning', 'Thursday between 8 and 12', 'All day Thursday'], answer: 1 }],
    writing: [{ title: 'A message to a friend', description: 'Write a short message to suggest a weekend activity and arrange the details.', prompt: 'Schlag etwas für Samstag vor. Frag nach Zeit und Treffpunkt.', minWords: 25, focus: ['Wir könnten …', 'Passt dir …?'], sample: 'Servus Lena! Hast du am Samstag Zeit? Wir könnten auf den Kahlenberg fahren und dort spazieren gehen. Passt dir der Vormittag? Wir können uns um zehn bei der U-Bahn treffen. Schreib mir, was du meinst!' }]
  },
  B1: {
    speaking: [
      { title: 'A new colleague', description: 'A colleague asks about your first weeks in Austria. Describe one surprise and explain how you adapted.', prompt: 'Was war für dich am Anfang in Österreich am ungewohntesten?', support: 'Give an example, explain how you felt, and say what helped.', model: 'Am Anfang war für mich ungewohnt, dass viele Leute im Alltag Dialekt sprechen. Ich habe oft nachgefragt, und meine Kolleginnen haben mir die Ausdrücke erklärt. Mittlerweile verstehe ich viel mehr.' },
      { title: 'Sorting out a delivery', description: 'A parcel was left with a neighbor, but you can’t find it. Explain the problem and ask for help.', prompt: 'Laut Benachrichtigung wurde das Paket bei einer Nachbarin abgegeben. Was ist passiert?', support: 'Explain what you have already tried and ask what to do next.', model: 'Ich habe schon bei den Nachbarn im ersten Stock gefragt, aber dort ist kein Paket. Könnten Sie bitte nachsehen, bei wem es abgegeben wurde?' }
    ],
    listening: [{ title: 'A village festival', description: 'Listen to this original radio-style announcement. Why is the event starting later?', text: 'Wegen des starken Regens beginnt das Dorffest heuer eine Stunde später. Die Musik spielt ab 15 Uhr im Gemeindesaal. Für Speis und Trank ist natürlich gesorgt. Wir freuen uns auf euch!', question: 'Why does the village festival start later?', options: ['The musicians are delayed', 'Heavy rain changed the plan', 'The community hall opens later'], answer: 1 }],
    reading: [{ title: 'A local newsletter', description: 'Read the excerpt and identify the reason for the new bus service.', text: 'Ab September fährt der Gemeindebus auch am Samstag. Die Gemeinde reagiert damit auf den Wunsch vieler Bewohnerinnen und Bewohner, die bisher ohne Auto nur schwer zum Wochenmarkt gekommen sind. Der Bus hält künftig auch beim Bahnhof und beim Gesundheitszentrum. Die genauen Fahrzeiten werden im August veröffentlicht.', question: 'Why is the Saturday bus service being added?', options: ['To connect residents with the weekly market', 'To replace the train to the city', 'To take people to a new school'], answer: 0 }],
    writing: [{ title: 'Share an experience', description: 'Write a short post about a local event you attended. Explain what happened and what you thought of it.', prompt: 'Berichte von einem Fest, Markt oder Ausflug. Was ist passiert? Was hat dir gefallen?', minWords: 55, focus: ['weil / obwohl', 'meiner Meinung nach'], sample: 'Am Samstag war ich zum ersten Mal auf einem Dorffest in der Steiermark. Obwohl es am Vormittag geregnet hat, war am Nachmittag viel los. Besonders gut hat mir die Musik gefallen, weil die Band bekannte österreichische Lieder gespielt hat. Ich habe auch neue Leute kennengelernt. Meiner Meinung nach sind solche Veranstaltungen eine gute Gelegenheit, die Nachbarschaft besser kennenzulernen.' }]
  },
  B2: {
    speaking: [
      { title: 'A fairer commute', description: 'Discuss a proposal at a team meeting. Present your view and respond to a possible objection.', prompt: 'Sollte unser Team an zwei Tagen pro Woche im Homeoffice arbeiten?', support: 'State your position, give two reasons, and acknowledge a downside.', model: 'Ich wäre dafür, weil wir uns den Arbeitsweg an zwei Tagen sparen und konzentrierter arbeiten könnten. Gleichzeitig ist mir wichtig, dass der Austausch im Team nicht zu kurz kommt. Ein gemeinsamer Bürotag pro Woche wäre daher sinnvoll.' },
      { title: 'The neighborhood meeting', description: 'Residents disagree about turning a parking lane into a small green space. Make a balanced argument.', prompt: 'Was spricht dafür oder dagegen, hier einen kleinen Park anzulegen?', support: 'Consider different residents’ needs and suggest a compromise.', model: 'Einerseits würde ein kleiner Park die Aufenthaltsqualität verbessern. Andererseits sind manche Bewohner auf Parkplätze angewiesen. Ein Kompromiss könnte sein, zuerst einen Teil der Fläche umzuwidmen und die Nutzung ein Jahr lang zu beobachten.' }
    ],
    listening: [{ title: 'An interview on regional food', description: 'Listen to this original interview excerpt. What is the speaker’s main argument?', text: 'Regional einzukaufen bedeutet nicht automatisch, dass jedes Produkt günstiger ist. Für mich zählt aber auch, dass ich weiß, wer es produziert hat. Wenn die Nachfrage verlässlich ist, können kleinere Betriebe besser planen. Das kommt letztlich der ganzen Region zugute.', question: 'What is the speaker mainly arguing?', options: ['Regional products are always cheaper', 'Reliable local demand can support small producers', 'Small producers should sell only at markets'], answer: 1 }],
    reading: [{ title: 'A newspaper commentary', description: 'Read the argument and identify the author’s proposed solution.', text: 'Wer den öffentlichen Verkehr am Land stärken will, muss mehr anbieten als einzelne zusätzliche Busse. Entscheidend ist, dass Anschlüsse verlässlich funktionieren und Informationen leicht zugänglich sind. Ein Rufbus kann dabei eine sinnvolle Ergänzung sein, sofern er in das bestehende Netz eingebunden wird. Die Verantwortung darf jedoch nicht allein bei den Gemeinden liegen: Bund und Länder müssen langfristig mitfinanzieren.', question: 'What does the author see as necessary for a successful call bus?', options: ['It should replace all regular buses', 'It should connect reliably to the wider network', 'It should be managed only by municipalities'], answer: 1 }],
    writing: [{ title: 'Make a case', description: 'Write a balanced opinion piece for a community newsletter about improving rural transport.', prompt: 'Welche Maßnahme würde den öffentlichen Verkehr am Land verbessern? Begründe deinen Vorschlag und geh auf einen Einwand ein.', minWords: 80, focus: ['Einerseits … andererseits …', 'daher / folglich'], sample: 'Um den öffentlichen Verkehr am Land attraktiver zu machen, sollte das Angebot besser auf Anschlüsse abgestimmt werden. Viele Menschen würden den Bus nutzen, wenn sie sich darauf verlassen könnten, den Zug rechtzeitig zu erreichen. Einerseits verursacht ein dichterer Takt höhere Kosten, andererseits könnten dadurch mehr Fahrgäste gewonnen werden. Sinnvoll wäre zunächst ein Pilotprojekt, dessen Nutzung nach einem Jahr ausgewertet wird.' }]
  },
  C1: {
    speaking: [
      { title: 'Who gets to define a place?', description: 'Give a short, structured response to a radio host. Distinguish your own experience from a broader claim.', prompt: 'Verändert der Tourismus den Charakter einer österreichischen Stadt zwangsläufig?', support: 'Qualify your claim, use an example, and address one counterargument.', model: 'Nicht zwangsläufig, aber die Entwicklung hängt davon ab, wer von den Veränderungen profitiert. In manchen Vierteln ermöglicht der Tourismus Investitionen in die Infrastruktur; zugleich kann der Wohnraum für die ansässige Bevölkerung knapper werden. Entscheidend ist daher weniger die Zahl der Gäste als die Frage, wie die Stadt Wachstum gestaltet.' },
      { title: 'Explaining a misunderstanding', description: 'Describe a moment when tone or regional wording caused confusion, and suggest how you cleared it up.', prompt: 'Kann ein Dialekt-Ausdruck im Berufsalltag zu Missverständnissen führen?', support: 'Use a concrete example and compare formal and informal settings.', model: 'Das kann vorkommen, besonders wenn ein Ausdruck außerhalb der Region eine andere Bedeutung hat. In einem informellen Gespräch lässt sich vieles aus dem Zusammenhang erschließen. Bei wichtigen Absprachen würde ich jedoch nachfragen oder die Aussage in neutralerem Standarddeutsch wiederholen.' }
    ],
    listening: [{ title: 'A curator on living heritage', description: 'Listen to this original cultural-program excerpt. What distinction does the curator make?', text: 'Wenn wir von lebendigem Kulturerbe sprechen, meinen wir keine Sammlung unveränderlicher Bräuche. Traditionen werden weitergegeben, aber sie verändern sich dabei. Gerade diese Aushandlung zwischen Bewahren und Erneuern macht sie für die Gegenwart relevant. Museen können Räume dafür schaffen, sollten aber nicht so tun, als gäbe es nur eine gültige Version.', question: 'What is the curator’s central distinction?', options: ['Traditions can be transmitted while also changing', 'Museums should select one authentic version', 'Living heritage should remain outside museums'], answer: 0 }],
    reading: [{ title: 'On dialect and belonging', description: 'Read the essay excerpt and infer the author’s view of dialect.', text: 'Dialekt wird gern als unmittelbarer Ausdruck von Zugehörigkeit beschrieben. Das greift zu kurz: Wer welchen Dialekt spricht, wann er ihn ablegt und wie andere darauf reagieren, ist auch eine Frage sozialer Erwartungen. In Österreich kann ein Wechsel ins Standarddeutsche Nähe schaffen oder Distanz markieren. Entscheidend ist nicht allein die Form, sondern die Situation, in der sie verwendet wird.', question: 'What does the author suggest about switching to standard German?', options: ['It always signals a desire for distance', 'Its meaning depends on the social situation', 'It removes regional identity from speech'], answer: 1 }],
    writing: [{ title: 'A nuanced argument', description: 'Write a short essay on whether dialect should have a place in public broadcasting.', prompt: 'Berücksichtige Verständlichkeit, regionale Identität und unterschiedliche Zielgruppen.', minWords: 100, focus: ['qualified claims', 'clear paragraph structure'], sample: 'Dialekt im Rundfunk kann regionale Perspektiven hörbar machen, sollte jedoch nicht als Selbstzweck eingesetzt werden. In Interviews trägt die natürliche Sprechweise oft zur Glaubwürdigkeit bei. Bei Informationen, die ein möglichst breites Publikum erreichen müssen, ist größere sprachliche Zugänglichkeit wichtig. Daraus folgt kein Entweder-oder: Eine bewusste Mischung kann sowohl Vielfalt als auch Verständlichkeit fördern.' }]
  },
  C2: {
    speaking: [
      { title: 'The language of belonging', description: 'Present a careful position on language, identity, and inclusion. Make room for competing interpretations.', prompt: 'Ist sprachliche Anpassung eine Form der Zugehörigkeit oder eine Erwartung an Zugewanderte?', support: 'Define what you mean, examine both sides, and end with a qualified conclusion.', model: 'Beides ist möglich, und genau darin liegt die Spannung. Sprachliche Anpassung kann den Zugang zu Beziehungen und Institutionen erleichtern; sie wird problematisch, wenn Zugehörigkeit an die Aufgabe der eigenen sprachlichen Identität geknüpft wird. Eine inklusive Gesellschaft sollte Mehrsprachigkeit als Ressource behandeln, ohne den praktischen Wert gemeinsamer Verständigung zu leugnen.' },
      { title: 'Reading between the lines', description: 'Respond diplomatically to a sweeping claim in a panel discussion.', prompt: '„Am Land kennt jeder jeden, dort gibt es keine Anonymität.“ Würdest du dem zustimmen?', support: 'Challenge the generalization tactfully and introduce a more precise distinction.', model: 'Das mag für bestimmte Situationen zutreffen, wäre mir als allgemeine Beschreibung aber zu pauschal. In kleineren Gemeinden sind soziale Beziehungen oft sichtbarer; daraus folgt jedoch nicht, dass alle Menschen eng miteinander verbunden sind. Vielleicht sollte man eher zwischen öffentlicher Sichtbarkeit und tatsächlicher Nähe unterscheiden.' }
    ],
    listening: [{ title: 'A conversation about memory', description: 'Listen to this original discussion excerpt. What tension does the speaker identify?', text: 'Erinnerungsorte werden oft so gestaltet, als ließe sich eine eindeutige Erzählung aus der Vergangenheit ableiten. Dabei ist schon die Auswahl dessen, was gezeigt wird, eine gegenwärtige Entscheidung. Das macht solche Orte nicht beliebig; es verlangt vielmehr, dass sie ihre Perspektive offenlegen und Widersprüche nicht vorschnell glätten.', question: 'What does the speaker argue memory sites should do?', options: ['Present one definitive account of the past', 'Acknowledge their perspective and preserve tensions', 'Avoid making choices about what to display'], answer: 1 }],
    reading: [{ title: 'A review of a regional archive', description: 'Read the review and identify its main reservation.', text: 'Das neue digitale Archiv überzeugt weniger durch seine Benutzeroberfläche als durch die Entscheidung, den Quellen ihre Uneindeutigkeit zu lassen. Ein privater Brief, ein Behördenvermerk und eine spätere Erinnerung stehen nebeneinander, ohne dass eine Stimme zur abschließenden Instanz erklärt wird. Diese Offenheit ist produktiv, setzt allerdings voraus, dass Nutzerinnen und Nutzer Herkunft und Entstehung der Dokumente nachvollziehen können. Gerade hier bleiben die Erläuterungen stellenweise zu knapp.', question: 'What is the reviewer’s main reservation?', options: ['The archive excludes private documents', 'The interface makes sources too difficult to access', 'The context provided for some sources is insufficient'], answer: 2 }],
    writing: [{ title: 'A precise position', description: 'Develop a nuanced argument for a cultural journal. Distinguish evidence from interpretation.', prompt: 'Wie sollten öffentliche Institutionen mit regionalen Sprachformen umgehen, ohne sie zu folklorisieren?', minWords: 120, focus: ['distinguish evidence from interpretation', 'acknowledge a counterargument'], sample: 'Öffentliche Institutionen sollten regionale Sprachformen weder als bloße Folklore ausstellen noch ihre Bedeutung romantisieren. Dazu gehört zunächst, sie in ihren jeweiligen sozialen Zusammenhängen zu dokumentieren: Wer verwendet eine Form, in welcher Situation und mit welcher Wirkung? Eine solche Kontextualisierung verhindert zwar nicht jede Vereinfachung, macht sie aber sichtbar. Zugleich muss bedacht werden, dass Dokumentation selbst auswählt und ordnet. Entscheidend ist daher nicht die Illusion vollständiger Neutralität, sondern ein transparenter Umgang mit Perspektive und Auswahl.' }]
  }
};

const videoExercises = {
  A1: [
    { title: 'Choose a greeting', description: 'Austrian greetings change with the situation. Pick the more polite choice for greeting a shopkeeper.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Grüß Gott!', meaning: 'A polite, widely used hello.', example: 'Grüß Gott, Frau Huber!', question: 'Which greeting is more casual with a friend?', options: ['Grüß Gott', 'Servus', 'Guten Tag, Frau Huber'], answer: 1, explanation: 'Servus is informal and can mean hello or goodbye. Grüß Gott is a common polite greeting across much of Austria.' },
    { title: 'The verb stays in second position', description: 'In a German main clause, the conjugated verb takes position two, even when another phrase comes first.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Heute beginnt die Sendung um acht.', meaning: 'Today the programme starts at eight.', example: 'Morgen beginnt die Übertragung früher.', question: 'Which word is in the second position in the example?', options: ['Morgen', 'beginnt', 'die'], answer: 1, explanation: 'Morgen is the first element; beginnt is the conjugated verb in position two; die Übertragung follows it.' },
    { title: 'A phrase at the bakery', description: 'Recognize a friendly Austrian service phrase and choose a natural reply.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Was darf’s denn sein?', meaning: 'What can I get for you?', example: 'Was darf’s denn sein? – Zwei Semmeln, bitte.', question: 'What is a natural answer?', options: ['Zwei Semmeln, bitte.', 'Es ist halb neun.', 'Ich komme aus Graz.'], answer: 0, explanation: 'Was darf’s denn sein? is a common informal service question. Answer with what you would like; bitte keeps the request polite.' },
    { title: 'A separable verb', description: 'Many everyday verbs split in a main clause: the prefix moves to the end.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Ich schalte die ZIB um acht ein.', meaning: 'I switch on the news at eight.', example: 'Wir schalten später wieder ein.', question: 'Which sentence has the correct word order?', options: ['Ich einschalte die Sendung um acht.', 'Ich schalte die Sendung um acht ein.', 'Ich die Sendung schalte ein um acht.'], answer: 1, explanation: 'The verb is einschalten. In a main clause, the conjugated part schalte is in position two and ein goes to the end.' }
  ],
  A2: [
    { title: 'A phrase that “works out”', description: 'This common Austrian expression is useful when checking time, space, or whether a plan is feasible.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das geht sich aus.', meaning: 'That works out / there is enough time or space.', example: 'Wenn wir jetzt losfahren, geht sich der Zug noch aus.', question: 'What does sich ausgehen mean here?', options: ['To get lost on the way', 'To be feasible or leave enough time', 'To go out for the evening'], answer: 1, explanation: 'Sich ausgehen is a characteristic Austrian expression for something being possible, fitting, or working out.' },
    { title: 'Spoken Perfekt', description: 'In casual speech, speakers often shorten habe to hab. The full form is common in careful writing.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Ich hab mir die Sendung angeschaut.', meaning: 'I watched the programme.', example: 'Careful form: Ich habe mir die Sendung angeschaut.', question: 'Which is the full written form?', options: ['Ich bin mir die Sendung angeschaut.', 'Ich habe mir die Sendung angeschaut.', 'Ich hatte mir die Sendung anschauen.'], answer: 1, explanation: 'The Perfekt uses haben plus the past participle angeschaut. Hab is a common spoken contraction of habe.' },
    { title: 'The verb after obwohl', description: 'Obwohl introduces a contrast. In its subordinate clause, the conjugated verb goes to the end.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Obwohl der Beitrag kurz ist, erklärt er viel.', meaning: 'Although the report is short, it explains a lot.', example: 'Obwohl es spät ist, sehen wir noch die Nachrichten.', question: 'Where does ist go in the obwohl-clause?', options: ['Directly after obwohl', 'At the end of the clause', 'Before the subject'], answer: 1, explanation: 'Subordinating conjunctions such as obwohl send the conjugated verb to the end: Obwohl der Beitrag kurz ist.' },
    { title: 'A polite request', description: 'Use the Konjunktiv II form könnten to make a request sound more courteous.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Könnten Sie das bitte wiederholen?', meaning: 'Could you please repeat that?', example: 'Könnten Sie mir die Meldung bitte erklären?', question: 'What does könnten do in this sentence?', options: ['Makes the request more polite', 'Changes it into the past tense', 'Makes it an order'], answer: 0, explanation: 'Könnten is the polite Konjunktiv II form of können. Pair it with Sie and bitte for a courteous request.' }
  ],
  B1: [
    { title: 'A reason with weil', description: 'Give a reason with weil and move the conjugated verb to the end of that clause.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Straße bleibt gesperrt, weil Bauarbeiten stattfinden.', meaning: 'The road remains closed because construction work is taking place.', example: 'Wir nehmen den Bus, weil die Straßenbahn heute nicht fährt.', question: 'Where does fährt belong in the weil-clause?', options: ['Immediately after weil', 'At the end of the clause', 'Before heute'], answer: 1, explanation: 'Weil is a subordinating conjunction, so the conjugated verb moves to the end: weil die Straßenbahn heute nicht fährt.' },
    { title: 'Put the focus on an event', description: 'The passive is useful in news when the action matters more than who performs it.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Straße wird wegen der Bauarbeiten gesperrt.', meaning: 'The road is being closed because of construction work.', example: 'Die Ergebnisse werden am Montag veröffentlicht.', question: 'How is the present passive formed here?', options: ['werden + past participle', 'haben + infinitive', 'sein + adjective'], answer: 0, explanation: 'The present passive uses werden plus the past participle: wird gesperrt, werden veröffentlicht. It foregrounds the event.' },
    { title: 'Report what someone said', description: 'News reports often use Konjunktiv I to distinguish an attributed statement from a confirmed fact.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Sprecherin sagt, der Zug habe Verspätung.', meaning: 'The spokesperson says that the train is delayed.', example: 'Die Gemeinde teilt mit, die Straße bleibe bis Freitag gesperrt.', question: 'Which form marks indirect speech?', options: ['sagt', 'habe', 'Verspätung'], answer: 1, explanation: 'Habe is Konjunktiv I of haben. In formal reporting, it attributes the information to the speaker rather than stating it directly as the reporter’s own claim.' },
    { title: 'Attribute a source', description: 'Laut is a compact way to say where a statement or information comes from.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Laut der Gemeinde bleibt die Straße bis Freitag gesperrt.', meaning: 'According to the municipality, the road remains closed until Friday.', example: 'Laut Polizei wurde niemand verletzt.', question: 'What does laut tell the reader?', options: ['Who the information is attributed to', 'When the road will reopen for certain', 'Why the municipality issued the notice'], answer: 0, explanation: 'Laut introduces the source of a claim. It signals attribution; it does not by itself prove or guarantee the information.' },
    { title: 'Use eh for shared context', description: 'In Austrian conversation, eh can signal that something is already understood or true anyway.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das war eh nur ein Vorschlag.', meaning: 'That was only a suggestion anyway.', example: 'Wir können eh morgen noch darüber reden.', question: 'What does eh add in this context?', options: ['A sense of “anyway” or shared knowledge', 'A question about the past', 'A formal source attribution'], answer: 0, explanation: 'Eh is a frequent Austrian discourse particle. Its exact nuance depends on context; here it presents the point as already understood or unsurprising.' },
    { title: 'Talk about a hypothetical plan', description: 'Use Konjunktiv II to make a suggestion or describe a situation that is not currently real.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Wenn ich Zeit hätte, würde ich beim Hoffest helfen.', meaning: 'If I had time, I would help at the farm festival.', example: 'Wenn das Wetter besser wäre, würden wir draußen feiern.', question: 'Which forms mark the hypothetical situation?', options: ['hätte and würde', 'habe and wird', 'hatte and ist'], answer: 0, explanation: 'Hätte and würde are Konjunktiv II forms. Together they describe an imagined condition and its possible result.' }
  ],
  B2: [
    { title: 'A conditional proposal', description: 'Use würde plus an infinitive to describe a hypothetical policy or possible outcome.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Gemeinde würde die Busverbindung ausbauen.', meaning: 'The municipality would expand the bus service.', example: 'Mit zusätzlicher Förderung würde das Angebot häufiger fahren.', question: 'Which meaning does würde express here?', options: ['A reported past event', 'A hypothetical possibility or proposal', 'A completed action'], answer: 1, explanation: 'Würde plus infinitive commonly expresses a hypothetical or conditional action: würde ausbauen, würde fahren.' },
    { title: 'Concession with trotz', description: 'Trotz introduces a circumstance that does not prevent the main event. Formal standard German commonly uses the genitive.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Trotz des Regens findet der Markt statt.', meaning: 'Despite the rain, the market is taking place.', example: 'Trotz der Kritik bleibt der Plan bestehen.', question: 'Which case follows trotz in this formal example?', options: ['Nominative', 'Accusative', 'Genitive'], answer: 2, explanation: 'In formal standard German, trotz commonly takes the genitive: trotz des Regens, trotz der Kritik. Dative also occurs in everyday speech.' },
    { title: 'Link two equal points', description: 'The paired connector nicht nur … sondern auch adds a second point with emphasis.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Der Bericht ist nicht nur informativ, sondern auch verständlich.', meaning: 'The report is not only informative, but also easy to understand.', example: 'Die Maßnahme hilft nicht nur Pendlern, sondern auch Anwohnern.', question: 'What does sondern auch do?', options: ['Adds an emphasized second point', 'Introduces a reason', 'Marks a condition'], answer: 0, explanation: 'Nicht nur … sondern auch links two parallel elements and emphasizes that both apply.' },
    { title: 'Read compressed headlines', description: 'Headlines often omit articles or a form of sein to stay brief. Restore the full sentence.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Neue ZIB-Sendung am Sonntag geplant.', meaning: 'A new ZIB programme is planned for Sunday.', example: 'Full sentence: Eine neue ZIB-Sendung ist am Sonntag geplant.', question: 'Which words are supplied in the full sentence?', options: ['Eine and ist', 'wird and haben', 'dass and war'], answer: 0, explanation: 'Headlines use compressed syntax. In ordinary prose, restore the article and finite verb: Eine neue ZIB-Sendung ist … geplant.' },
    { title: 'Soften an opinion with wär', description: 'In casual speech, wär is a common shortened form of wäre. Pair it with a suggestion to sound conversational.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Wär schon gut, wenn wir vorher Bescheid wüssten.', meaning: 'It would be good if we knew in advance.', example: 'Wär vielleicht besser, wenn wir erst morgen losfahren.', question: 'What is wär short for?', options: ['war', 'wäre', 'wird'], answer: 1, explanation: 'Wär is a spoken contraction of wäre, the Konjunktiv II form of sein. The wenn-clause uses wüssten, another Konjunktiv II form.' },
    { title: 'Agree with a conversational phrase', description: 'Use a natural spoken phrase to show strong agreement in a group conversation.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Da bin ich ganz bei dir.', meaning: 'I completely agree with you.', example: 'Bei dem Vorschlag bin ich ganz bei euch.', question: 'What does ganz bei dir mean here?', options: ['I agree with your point', 'I am physically beside you', 'I have a different suggestion'], answer: 0, explanation: 'Bei jemandem sein is used idiomatically to express agreement or support. Ganz strengthens the agreement.' }
  ],
  C1: [
    { title: 'Konjunktiv I in a report', description: 'Formal reporting uses Konjunktiv I to keep a source’s claim distinct from the journalist’s own voice.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Der Minister sagt, die Lage habe sich verbessert.', meaning: 'The minister says the situation has improved.', example: 'Die Sprecherin erklärte, man prüfe derzeit alle Hinweise.', question: 'Why is habe used instead of hat?', options: ['It marks reported speech', 'It signals a future event', 'It is the passive voice'], answer: 0, explanation: 'Habe is Konjunktiv I. It conventionally marks indirect speech in formal reporting and maintains distance from the attributed claim.' },
    { title: 'Contrast with während', description: 'Während can connect two contrasting developments. Its subordinate clause sends the verb to the end.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Während die Preise sinken, bleibt die Nachfrage hoch.', meaning: 'While prices are falling, demand remains high.', example: 'Während die Stadt wächst, verändert sich auch ihr Umland.', question: 'What is während doing here?', options: ['Showing a contrast between two developments', 'Giving a direct cause', 'Quoting a source'], answer: 0, explanation: 'Here während highlights simultaneous but contrasting trends. The finite verb closes its subordinate clause: während die Preise sinken.' },
    { title: 'Turn an action into a noun', description: 'Nominalization creates a compact, formal style often found in reports and official language.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Nach der Veröffentlichung des Berichts gab es Fragen.', meaning: 'After the report was published, questions arose.', example: 'Verb clause: Nachdem der Bericht veröffentlicht worden war, gab es Fragen.', question: 'Which word is the nominalized action?', options: ['Nach', 'Veröffentlichung', 'Fragen'], answer: 1, explanation: 'Veröffentlichung is formed from veröffentlichen. The nominal phrase nach der Veröffentlichung is compact and formal; the verb-clause version is more explicit.' },
    { title: 'Signal a reported inference', description: 'Demnach points to a conclusion drawn from previously mentioned information, not necessarily direct observation.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Demnach sollen die Gespräche am Montag weitergehen.', meaning: 'According to that information, the talks are expected to continue Monday.', example: 'Die Unterlagen wurden geprüft. Demnach fehlen noch zwei Nachweise.', question: 'What does demnach signal?', options: ['A conclusion based on information already mentioned', 'A promise made by the speaker', 'A direct quotation'], answer: 0, explanation: 'Demnach means “accordingly” or “according to that.” Sollen can further mark the continuation as reported rather than independently confirmed.' },
    { title: 'Qualify disagreement with na ja', description: 'A short conversational phrase can soften disagreement before you explain your position.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Na ja, ganz so einfach ist das nicht.', meaning: 'Well, it is not quite that simple.', example: 'Na ja, ich seh das ein bissl anders.', question: 'What does na ja do at the start?', options: ['Signals a qualified or hesitant response', 'Introduces a direct quotation', 'Marks a firm command'], answer: 0, explanation: 'Na ja gives the speaker room to qualify a response. The phrase ganz so … nicht also softens a direct contradiction.' },
    { title: 'Use schon as a conversational marker', description: 'In spoken Austrian German, schon can add reassurance or acknowledge a point before introducing a contrast.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das ist schon verständlich, aber es dauert halt länger.', meaning: 'That is understandable, but it does take longer.', example: 'Das kann schon sein, trotzdem sollten wir nachfragen.', question: 'What does schon do in the first clause?', options: ['Acknowledges or concedes a point', 'Places the event in the past', 'Turns the phrase into a question'], answer: 0, explanation: 'Here schon is a modal particle, not the adverb “already.” It acknowledges the point; aber then introduces a qualification.' }
  ],
  C2: [
    { title: 'Hedge an inference with dürfte', description: 'A modal verb can express a careful estimate rather than certainty.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Die Maßnahme dürfte im Frühjahr beginnen.', meaning: 'The measure is likely to begin in spring.', example: 'Die Verzögerung dürfte mehrere Gründe haben.', question: 'What nuance does dürfte carry here?', options: ['A cautious likelihood or inference', 'A strict obligation', 'A past habit'], answer: 0, explanation: 'Dürfte is Konjunktiv II of dürfen, but here it softens a prediction: the event is likely, not guaranteed.' },
    { title: 'A formal concession with wenngleich', description: 'Wenngleich introduces a concession similar to obwohl, often with a more formal register.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Wenngleich die Daten lückenhaft sind, zeigt sich ein klarer Trend.', meaning: 'Although the data are incomplete, a clear trend is apparent.', example: 'Wenngleich die Lösung teuer ist, könnte sie langfristig helfen.', question: 'Which connector has a similar meaning?', options: ['obwohl', 'damit', 'sobald'], answer: 0, explanation: 'Wenngleich means “although/even though.” Like obwohl, it introduces a concessive subordinate clause with the verb at the end.' },
    { title: 'Read the phrase nicht zuletzt', description: 'This phrase highlights one important factor among several; it is not simply a marker of sequence.', source: 'ORF-STYLE · ORIGINAL EXAMPLE', phrase: 'Der Umbau ist nicht zuletzt wegen der hohen Kosten umstritten.', meaning: 'The redesign is controversial, not least because of its high cost.', example: 'Die Debatte betrifft nicht zuletzt viele Pendlerinnen und Pendler.', question: 'What does nicht zuletzt emphasize?', options: ['An especially relevant factor among others', 'The final event in a sequence', 'A reason that has been ruled out'], answer: 0, explanation: 'Nicht zuletzt draws attention to a particularly important consideration while implying there may be other factors too.' },
    { title: 'A collocation: eine Frage aufwerfen', description: 'German often pairs nouns with specific verbs. Learn the phrase as a unit rather than translating each word.', source: 'ORF-STYLE · FORMAL AUSTRIAN GERMAN · ORIGINAL EXAMPLE', phrase: 'Der Bericht wirft eine wichtige Frage auf.', meaning: 'The report raises an important question.', example: 'Die Entscheidung wirft Fragen zur Finanzierung auf.', question: 'What does eine Frage aufwerfen mean?', options: ['To raise or prompt a question', 'To answer a question completely', 'To avoid discussing a question'], answer: 0, explanation: 'Eine Frage aufwerfen is a fixed collocation meaning “to raise a question.” Learning the noun-verb pairing makes formal German sound more natural.' },
    { title: 'Hear the nuance in halt', description: 'Austrian speakers often use modal particles to frame a statement as obvious, resigned, or accepted.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Das ist halt so eine Sache.', meaning: 'That is just one of those things.', example: 'Das lässt sich halt nicht von heute auf morgen ändern.', question: 'What nuance does halt add here?', options: ['Matter-of-fact acceptance or resignation', 'A precise time in the past', 'A question about permission'], answer: 0, explanation: 'Halt is a modal particle that can present something as accepted or difficult to change. Its force depends on intonation and context.' },
    { title: 'An Austrian spoken form: tät', description: 'In some Austrian speech, tät plus an infinitive is used for a tentative suggestion. The standard alternative is würde.', source: 'EVERYDAY AUSTRIAN · ORIGINAL EXAMPLE', phrase: 'Ich tät sagen, wir warten noch ein bissl.', meaning: 'I would say we should wait a little longer.', example: 'Standard alternative: Ich würde sagen, wir warten noch ein bisschen.', question: 'Which form is the standard alternative to tät sagen?', options: ['würde sagen', 'werde gesagt', 'habe gesagt'], answer: 0, explanation: 'Tät sagen is a regional spoken Konjunktiv II form. Würde sagen is the broadly standard equivalent; a bissl is a colloquial Austrian form of ein bisschen.' }
  ]
};

const grammarActivities = {
  A1: [
    { title: 'Main clause word order', description: 'A1 grammar · Build a simple sentence with the conjugated verb in second position.', source: 'A1 · CORE GRAMMAR', phrase: 'Heute beginnt die Sendung um acht.', meaning: 'Today the programme starts at eight.', example: 'Am Abend beginnt der Film.', question: 'Which sentence has correct verb-second order?', options: ['Heute die Sendung beginnt um acht.', 'Heute beginnt die Sendung um acht.', 'Heute um acht die Sendung beginnt.'], answer: 1, explanation: 'In a main clause the conjugated verb is in position two. The first position can be a time phrase: Heute beginnt …' },
    { title: 'Present-tense verb endings', description: 'A1 grammar · Match the verb ending to the subject.', source: 'A1 · CORE GRAMMAR', phrase: 'Ich hör__ die Nachrichten.', meaning: 'I listen to the news.', example: 'Du hörst die Nachrichten.', question: 'Which ending completes the sentence?', options: ['-e: höre', '-st: hörst', '-t: hört'], answer: 0, explanation: 'Regular verbs usually take -e with ich: ich höre. The common endings are ich -e, du -st, er/sie/es -t.' },
    { title: 'Accusative articles', description: 'A1 grammar · Recognize the direct object after a common verb.', source: 'A1 · CORE GRAMMAR', phrase: 'Ich lese ___ Bericht.', meaning: 'I am reading the report.', example: 'Ich lese den Bericht und höre die Nachrichten.', question: 'Which article completes the sentence?', options: ['der', 'den', 'dem'], answer: 1, explanation: 'Bericht is masculine. As the direct object of lesen it takes the accusative article den.' }
  ],
  A2: [
    { title: 'Perfekt with haben or sein', description: 'A2 grammar · Choose the auxiliary for a change of place.', source: 'A2 · CORE GRAMMAR', phrase: 'Wir ___ nach Salzburg gefahren.', meaning: 'We travelled to Salzburg.', example: 'Wir sind mit dem Zug gefahren.', question: 'Which auxiliary completes this sentence?', options: ['haben', 'sind', 'werden'], answer: 1, explanation: 'Many verbs describing movement from one place to another form the Perfekt with sein: wir sind gefahren.' },
    { title: 'Dative after mit', description: 'A2 grammar · Mit is followed by the dative case.', source: 'A2 · CORE GRAMMAR', phrase: 'Ich fahre mit ___ Bus zur Arbeit.', meaning: 'I take the bus to work.', example: 'Sie fährt mit der Straßenbahn.', question: 'Which article completes the sentence?', options: ['der', 'den', 'dem'], answer: 2, explanation: 'Mit always takes the dative. Bus is masculine, so the dative form is dem Bus.' },
    { title: 'Verb position in a weil-clause', description: 'A2 grammar · A subordinating conjunction sends the conjugated verb to the end.', source: 'A2 · CORE GRAMMAR', phrase: 'Ich bleibe zu Hause, weil es heute ___.', meaning: 'I am staying home because it is raining today.', example: '…weil die Straßenbahn heute nicht fährt.', question: 'Which word order is correct?', options: ['regnet', 'regnet es', 'es regnet'], answer: 0, explanation: 'Weil introduces a subordinate clause. The conjugated verb goes to the end: weil es heute regnet.' }
  ],
  B1: [
    { title: 'Relative clauses', description: 'B1 grammar · Add information about a person or thing with a relative clause.', source: 'B1 · CORE GRAMMAR', phrase: 'Die Frau, ___ den Bericht vorstellt, arbeitet beim ORF.', meaning: 'The woman who is presenting the report works at ORF.', example: 'Der Beitrag, den wir gestern gesehen haben, war interessant.', question: 'Which relative pronoun fits the subject of the clause?', options: ['der', 'die', 'das'], answer: 1, explanation: 'The antecedent Frau is feminine, and the pronoun is the subject of vorstellt, so use die. Relative clauses place the verb at the end.' },
    { title: 'Konjunktiv II for advice', description: 'B1 grammar · Use a conditional form to make advice less direct.', source: 'B1 · CORE GRAMMAR', phrase: 'An Ihrer Stelle ___ ich noch einmal nachfragen.', meaning: 'In your position, I would ask again.', example: 'An deiner Stelle würde ich den Termin verschieben.', question: 'Which form makes the advice appropriately tentative?', options: ['frage', 'würde', 'werde'], answer: 1, explanation: 'Würde plus infinitive expresses a hypothetical suggestion. The full sentence is: An Ihrer Stelle würde ich … nachfragen.' },
    { title: 'Present passive', description: 'B1 grammar · Form the passive to emphasize an action rather than its actor.', source: 'B1 · CORE GRAMMAR', phrase: 'Die Ergebnisse ___ morgen veröffentlicht.', meaning: 'The results will be published tomorrow.', example: 'Die Straße wird bis Freitag gesperrt.', question: 'Which auxiliary forms the present passive?', options: ['werden', 'haben', 'sein'], answer: 0, explanation: 'The present passive is formed with werden plus the past participle: Die Ergebnisse werden veröffentlicht.' }
  ],
  B2: [
    { title: 'Adjective endings after a definite article', description: 'B2 grammar · Choose the adjective ending after a plural definite article.', source: 'B2 · CORE GRAMMAR', phrase: 'Die verlässlich___ Daten wurden heute veröffentlicht.', meaning: 'The reliable data were published today.', example: 'Die neuen Zahlen liegen jetzt vor.', question: 'Which ending is correct?', options: ['-e', '-en', '-er'], answer: 1, explanation: 'After the definite article die in the plural, the adjective ending is -en: die verlässlichen Daten.' },
    { title: 'Paired conjunctions', description: 'B2 grammar · Keep the two parts of a paired connector parallel.', source: 'B2 · CORE GRAMMAR', phrase: 'Die Maßnahme ist nicht nur teuer, ___ auch aufwendig.', meaning: 'The measure is not only expensive but also complex.', example: 'Der Bericht ist sowohl informativ als auch verständlich.', question: 'Which word completes the connector?', options: ['sondern', 'obwohl', 'damit'], answer: 0, explanation: 'The paired connector is nicht nur … sondern auch. It links equivalent sentence elements.' },
    { title: 'Past counterfactuals', description: 'B2 grammar · Describe a past situation that did not happen and its imagined result.', source: 'B2 · CORE GRAMMAR', phrase: 'Wenn die Behörde früher informiert ___, hätten alle besser planen können.', meaning: 'If the authority had informed people earlier, everyone could have planned better.', example: 'Wenn wir früher losgefahren wären, hätten wir den Zug erreicht.', question: 'Which form completes the past condition?', options: ['hat', 'hätte', 'haben würde'], answer: 1, explanation: 'A past counterfactual uses hätte or wäre plus the past participle in the condition: wenn … informiert hätte.' }
  ],
  C1: [
    { title: 'Konjunktiv I in reported speech', description: 'C1 grammar · Mark attributed statements without presenting them as the reporter’s own claim.', source: 'C1 · CORE GRAMMAR', phrase: 'Die Sprecherin sagt, die Lage ___ sich verbessert.', meaning: 'The spokesperson says that the situation has improved.', example: 'Der Minister erklärte, man prüfe alle Hinweise.', question: 'Which form marks indirect speech?', options: ['hat', 'habe', 'hatte'], answer: 1, explanation: 'Habe is Konjunktiv I. It is the standard formal choice for reported speech when it is distinct from the indicative.' },
    { title: 'Nominalization in formal writing', description: 'C1 grammar · Replace a subordinate verb clause with a concise noun phrase.', source: 'C1 · CORE GRAMMAR', phrase: 'Nachdem der Bericht veröffentlicht worden war, gab es Fragen.', meaning: 'After the report had been published, questions arose.', example: 'Nach der Veröffentlichung des Berichts gab es Fragen.', question: 'Which phrase nominalizes the action?', options: ['Nach der Veröffentlichung', 'Nachdem der Bericht', 'gab es Fragen'], answer: 0, explanation: 'Veröffentlichung is a noun formed from veröffentlichen. Nach der Veröffentlichung is a compact formal alternative to nachdem … veröffentlicht worden war.' },
    { title: 'Participial adjectives', description: 'C1 grammar · Use a participle as a concise modifier before a noun.', source: 'C1 · CORE GRAMMAR', phrase: 'Die gestern veröffentlicht___ Daten sind frei zugänglich.', meaning: 'The data published yesterday are freely available.', example: 'Die am Freitag angekündigte Änderung tritt bald in Kraft.', question: 'Which adjective ending completes the sentence?', options: ['-e', '-en', '-er'], answer: 1, explanation: 'Daten is plural and follows the definite article die, so the participial adjective takes -en: die veröffentlichten Daten.' }
  ],
  C2: [
    { title: 'Concessive subordinate clauses', description: 'C2 grammar · Express a concession while maintaining subordinate-clause word order.', source: 'C2 · CORE GRAMMAR', phrase: 'Wenngleich der Einwand berechtigt ___, bleibt die Frage offen.', meaning: 'Although the objection is justified, the question remains open.', example: 'Obgleich die Daten lückenhaft sind, zeigt sich ein Trend.', question: 'Which form completes the subordinate clause?', options: ['ist', 'sein', 'wäre'], answer: 0, explanation: 'The subject Einwand is singular, so the verb is ist. In a wenngleich-clause, the conjugated verb goes to the end.' },
    { title: 'Modal verbs for cautious inference', description: 'C2 grammar · Distinguish an inferred likelihood from obligation.', source: 'C2 · CORE GRAMMAR', phrase: 'Die Lage ___ sich im Frühjahr beruhigen.', meaning: 'The situation is likely to calm down in spring.', example: 'Die Verzögerung dürfte mehrere Gründe haben.', question: 'Which modal expresses a cautious prediction?', options: ['muss', 'dürfte', 'soll'], answer: 1, explanation: 'Dürfte is Konjunktiv II of dürfen and often marks a careful inference: likely, but not certain.' },
    { title: 'Reported speech when Konjunktiv I matches', description: 'C2 grammar · Use a substitute form when Konjunktiv I is identical to the indicative.', source: 'C2 · CORE GRAMMAR', phrase: 'Die Sprecher teilten mit, sie ___ alle Unterlagen geprüft.', meaning: 'The spokespersons said they had checked all the documents.', example: 'Sie erklärten, sie hätten den Bericht bereits gelesen.', question: 'Why is hätten used here?', options: ['Konjunktiv I would look like the indicative', 'It marks a future action', 'It turns the clause into the passive'], answer: 0, explanation: 'For plural subjects, Konjunktiv I haben is haben, identical to the indicative. Konjunktiv II hätten is often used to keep reported speech distinct.' }
  ]
};

const skillLabels = { speaking: 'SPEAKING · ROLE PLAY', listening: 'LISTENING · COMPREHENSION', reading: 'READING · COMPREHENSION', writing: 'WRITING · COMPOSE', grammar: 'GRAMMAR · CEFR PRACTICE' };
const levelCaption = document.querySelector('#level-caption');
const activityLevel = document.querySelector('#activity-level');
const activityTag = document.querySelector('#activity-tag');
const levelGoal = document.querySelector('#level-goal');
const activityContent = document.querySelector('#activity-content');
const labChoices = document.querySelector('#lab-choices');
const labStatus = document.querySelector('#lab-status');
const labExplanation = document.querySelector('#lab-explanation');
let currentVideoSource = 'orf';
let currentVideoExerciseIndex = 0;
let currentLevel = 'A1';
let currentSkill = 'speaking';
let currentActivityIndex = 0;
let recognition = null;

function renderActivity() {
  const activityList = currentSkill === 'grammar' ? grammarActivities[currentLevel] : activities[currentLevel][currentSkill];
  const item = activityList[currentActivityIndex % activityList.length];
  activityLevel.textContent = currentLevel;
  activityTag.textContent = skillLabels[currentSkill];
  levelGoal.textContent = levelInfo[currentLevel].goal;
  activityContent.className = 'activity-enter';

  if (currentSkill === 'speaking') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <div class="prompt-card"><p class="prompt-overline">YOUR PART</p><p class="prompt-text" lang="de-AT">${item.prompt}</p><p class="prompt-support">${item.support}</p></div>
      <label class="field-label" for="spoken-response">Your spoken response <span>Transcript appears here when speech recognition is available.</span></label>
      <textarea class="answer-field" id="spoken-response" lang="de-AT" placeholder="Speak, or type what you would say…"></textarea>
      <div class="activity-actions"><button class="primary-action" type="button" data-action="speak"><span aria-hidden="true">◉</span> Start speaking</button><button class="secondary-action" type="button" data-action="model">Show model answer</button><button class="secondary-action" type="button" data-action="next">New scenario <span aria-hidden="true">→</span></button></div>
      <p class="activity-status" id="activity-status" role="status">Speech recognition depends on browser support and microphone permission. This app does not score accent or pronunciation.</p>
      <div class="model-answer" id="model-answer" hidden><strong>A possible answer · not the only answer</strong><p lang="de-AT">${item.model}</p></div>`;
    return;
  }

  if (currentSkill === 'listening') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <div class="prompt-card"><p class="prompt-overline">AUDIO PRACTICE · AUSTRIAN GERMAN</p><p class="prompt-text">Listen for the key detail.</p><p class="prompt-support">Audio is generated with your browser’s German voice. Voice availability varies by device.</p></div>
      <div class="activity-actions"><button class="primary-action" type="button" data-action="listen"><span aria-hidden="true">▶</span> Play audio</button><button class="secondary-action" type="button" data-action="transcript">Show transcript</button></div>
      <div class="transcript-box" id="transcript-box" hidden><strong>Original practice dialogue</strong><p lang="de-AT">${item.text}</p></div>
      ${renderChoices(item)}
      <div class="activity-actions"><button class="secondary-action" type="button" data-action="check">Check answer</button><button class="secondary-action" type="button" data-action="next">Another listening</button></div>
      <p class="activity-status" id="activity-status" role="status"></p>`;
    return;
  }

  if (currentSkill === 'reading') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <div class="prompt-card reading-text"><p class="prompt-overline">READ THE ORIGINAL TEXT</p><p class="reading-copy" lang="de-AT">${item.text}</p></div>
      ${renderChoices(item)}
      <div class="activity-actions"><button class="primary-action" type="button" data-action="check">Check answer</button><button class="secondary-action" type="button" data-action="next">Another reading</button></div>
      <p class="activity-status" id="activity-status" role="status"></p>`;
    return;
  }

  if (currentSkill === 'grammar') {
    activityContent.innerHTML = `
      <h2 class="activity-title">${item.title}</h2>
      <p class="activity-description">${item.description}</p>
      <p class="bank-note">Original practice organized by CEFR grammar progression; not official Goethe exam material.</p>
      <div class="prompt-card grammar-card"><p class="prompt-overline">${item.source}</p><p class="prompt-text" lang="de-AT">${item.phrase}</p><p class="prompt-support">${item.meaning}</p><div class="grammar-example"><strong>Example</strong><span lang="de-AT">${item.example}</span></div></div>
      ${renderChoices(item)}
      <div class="activity-actions"><button class="primary-action" type="button" data-action="check">Check answer</button><button class="secondary-action" type="button" data-action="next">Next phrase <span aria-hidden="true">→</span></button></div>
      <p class="activity-status" id="activity-status" role="status"></p>
      <div class="grammar-explanation" id="grammar-explanation" hidden><strong>Why it works</strong><p>${item.explanation}</p></div>`;
    return;
  }

  activityContent.innerHTML = `
    <h2 class="activity-title">${item.title}</h2>
    <p class="activity-description">${item.description}</p>
    <div class="prompt-card"><p class="prompt-overline">YOUR WRITING PROMPT</p><p class="prompt-text" lang="de-AT">${item.prompt}</p></div>
    <label class="field-label" for="writing-response">Write in German <span>Drafts stay in this page and are not saved.</span></label>
    <textarea class="answer-field writing-field" id="writing-response" lang="de-AT" placeholder="Dein Text beginnt hier …"></textarea>
    <div class="writing-meta"><span id="word-count">0 words</span><span>Suggested minimum: ${item.minWords} words</span></div>
    <div class="writing-checklist">${item.focus.map((focus) => `<span class="writing-chip">${focus}</span>`).join('')}</div>
    <div class="activity-actions"><button class="primary-action" type="button" data-action="writing-check">Check writing goals</button><button class="secondary-action" type="button" data-action="sample">Show sample</button><button class="secondary-action" type="button" data-action="next">New prompt <span aria-hidden="true">→</span></button></div>
    <p class="activity-status" id="activity-status" role="status">Checks length only; it does not automatically grade grammar or style.</p>
    <div class="sample-answer" id="sample-answer" hidden><strong>Original sample answer</strong><p lang="de-AT">${item.sample}</p></div>`;
}

function renderChoices(item, groupName = 'choice') {
  return `<fieldset class="choice-list"><legend>${item.question}</legend>${item.options.map((option, index) => `<label class="choice-option"><input type="radio" name="${groupName}" value="${index}"><span>${option}</span></label>`).join('')}</fieldset>`;
}

function renderVideoExercise() {
  const exercises = videoExercises[currentLevel].filter((exercise) => currentVideoSource === 'bauer'
    ? exercise.source.startsWith('EVERYDAY AUSTRIAN')
    : !exercise.source.startsWith('EVERYDAY AUSTRIAN'));
  const exercise = exercises[currentVideoExerciseIndex % exercises.length];
  document.querySelector('#lab-level').textContent = currentLevel;
  document.querySelector('#lab-level-badge').textContent = currentLevel;
  document.querySelector('#lab-count').textContent = `${currentVideoExerciseIndex + 1} / ${exercises.length}`;
  document.querySelector('#lab-register').textContent = exercise.source;
  document.querySelector('#lab-title').textContent = exercise.title;
  document.querySelector('#lab-description').textContent = exercise.description;
  document.querySelector('#lab-phrase').textContent = exercise.phrase;
  document.querySelector('#lab-meaning').textContent = exercise.meaning;
  document.querySelector('#lab-example').textContent = exercise.example;
  document.querySelector('#lab-explanation-text').textContent = exercise.explanation;
  labChoices.innerHTML = renderChoices(exercise, 'lab-choice');
  labStatus.textContent = '';
  labStatus.className = 'activity-status';
  labExplanation.hidden = true;
}

function setStatus(message, kind = '') {
  const status = document.querySelector('#activity-status');
  if (!status) return;
  status.textContent = message;
  status.className = `activity-status${kind ? ` is-${kind}` : ''}`;
}

function stopRecognition() {
  if (!recognition) return;
  const activeRecognition = recognition;
  recognition = null;
  activeRecognition.stop();
}

function startSpeaking() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    setStatus('Speech-to-text is not supported in this browser. You can still answer aloud and type a reflection.', 'warning');
    return;
  }
  if (recognition) {
    stopRecognition();
    setStatus('Speaking stopped. Review your transcript, then compare with the model answer.');
    return;
  }

  const activeRecognition = new SpeechRecognition();
  recognition = activeRecognition;
  activeRecognition.lang = 'de-AT';
  activeRecognition.interimResults = true;
  activeRecognition.continuous = true;
  activeRecognition.onresult = (event) => {
    const responseField = document.querySelector('#spoken-response');
    if (!responseField || recognition !== activeRecognition) return;
    const transcript = Array.from(event.results).map((result) => result[0].transcript).join(' ');
    responseField.value = transcript;
  };
  activeRecognition.onerror = () => {
    if (recognition === activeRecognition) {
      recognition = null;
      setStatus('Microphone access or speech recognition failed. Check browser permission and try again.', 'warning');
    }
  };
  activeRecognition.onend = () => {
    if (recognition === activeRecognition) {
      recognition = null;
      setStatus('Speaking stopped. Review your transcript, then compare with the model answer.');
    }
  };
  try {
    activeRecognition.start();
    setStatus('Listening… speak in Austrian German. Select “Stop speaking” when you’re done.');
    const button = activityContent.querySelector('[data-action="speak"]');
    if (button) button.innerHTML = '<span aria-hidden="true">■</span> Stop speaking';
  } catch {
    recognition = null;
    setStatus('Could not start the microphone. Check browser permission and try again.', 'warning');
  }
}

function playAudio() {
  if (!('speechSynthesis' in window)) {
    setStatus('Audio playback is not available in this browser.', 'warning');
    return;
  }
  const item = activities[currentLevel].listening[currentActivityIndex % activities[currentLevel].listening.length];
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(item.text);
  const voices = window.speechSynthesis.getVoices();
  utterance.lang = 'de-AT';
  utterance.voice = voices.find((voice) => voice.lang.toLowerCase() === 'de-at') || voices.find((voice) => voice.lang.toLowerCase().startsWith('de')) || null;
  utterance.onend = () => setStatus('Audio finished. Choose the answer that best matches what you heard.');
  window.speechSynthesis.speak(utterance);
  setStatus('Playing audio… listen for the key detail.');
}

document.querySelectorAll('[data-level]').forEach((button) => {
  button.addEventListener('click', () => {
    stopRecognition();
    currentLevel = button.dataset.level;
    currentActivityIndex = 0;
    document.querySelectorAll('[data-level]').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    levelCaption.textContent = levelInfo[currentLevel].label;
    renderActivity();
    currentVideoExerciseIndex = 0;
    renderVideoExercise();
  });
});

document.querySelectorAll('[data-lab-source]').forEach((button) => {
  button.addEventListener('click', () => {
    currentVideoSource = button.dataset.labSource;
    currentVideoExerciseIndex = 0;
    document.querySelectorAll('[data-lab-source]').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    renderVideoExercise();
  });
});

document.querySelector('#video-lab').addEventListener('click', (event) => {
  const button = event.target.closest('[data-lab-action]');
  if (!button) return;
  const exercises = videoExercises[currentLevel].filter((exercise) => currentVideoSource === 'bauer'
    ? exercise.source.startsWith('EVERYDAY AUSTRIAN')
    : !exercise.source.startsWith('EVERYDAY AUSTRIAN'));
  const exercise = exercises[currentVideoExerciseIndex % exercises.length];

  if (button.dataset.labAction === 'next') {
    currentVideoExerciseIndex = (currentVideoExerciseIndex + 1) % exercises.length;
    renderVideoExercise();
    return;
  }

  const selected = labChoices.querySelector('input[name="lab-choice"]:checked');
  if (!selected) {
    labStatus.textContent = 'Choose an answer first.';
    labStatus.className = 'activity-status is-warning';
    return;
  }
  const isCorrect = Number(selected.value) === exercise.answer;
  labStatus.textContent = isCorrect ? 'Correct. Nice work.' : `Not quite. ${exercise.options[exercise.answer]}.`;
  labStatus.className = `activity-status is-${isCorrect ? 'success' : 'warning'}`;
  labExplanation.hidden = false;
});

document.querySelectorAll('[data-skill]').forEach((button) => {
  button.addEventListener('click', () => {
    stopRecognition();
    currentSkill = button.dataset.skill;
    currentActivityIndex = 0;
    document.querySelectorAll('[data-skill]').forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-pressed', String(active));
    });
    renderActivity();
  });
});

activityContent.addEventListener('input', (event) => {
  if (event.target.id !== 'writing-response') return;
  const count = event.target.value.trim().split(/\s+/).filter(Boolean).length;
  document.querySelector('#word-count').textContent = `${count} ${count === 1 ? 'word' : 'words'}`;
});

activityContent.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  const activityList = currentSkill === 'grammar' ? grammarActivities[currentLevel] : activities[currentLevel][currentSkill];
  const item = activityList[currentActivityIndex % activityList.length];

  if (action === 'speak') startSpeaking();
  if (action === 'model') {
    const model = document.querySelector('#model-answer');
    model.hidden = !model.hidden;
    button.textContent = model.hidden ? 'Show model answer' : 'Hide model answer';
  }
  if (action === 'listen') playAudio();
  if (action === 'transcript') {
    const transcript = document.querySelector('#transcript-box');
    transcript.hidden = !transcript.hidden;
    button.textContent = transcript.hidden ? 'Show transcript' : 'Hide transcript';
  }
  if (action === 'check') {
    const selected = activityContent.querySelector('input[name="choice"]:checked');
    if (!selected) {
      setStatus('Choose an answer first.', 'warning');
      return;
    }
    const isCorrect = Number(selected.value) === item.answer;
    setStatus(isCorrect ? 'Correct. Nice work.' : `Not quite. ${item.options[item.answer]}.`, isCorrect ? 'success' : 'warning');
    if (currentSkill === 'grammar') document.querySelector('#grammar-explanation').hidden = false;
  }
  if (action === 'writing-check') {
    const text = document.querySelector('#writing-response').value.trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minimum = item.minWords;
    setStatus(wordCount >= minimum ? `Good length: ${wordCount} words. Now check your grammar, word order, and the focus points above.` : `${wordCount} words so far. Add ${minimum - wordCount} more to reach the suggested length, then review the focus points.`, wordCount >= minimum ? 'success' : 'warning');
  }
  if (action === 'sample') {
    const sample = document.querySelector('#sample-answer');
    sample.hidden = !sample.hidden;
    button.textContent = sample.hidden ? 'Show sample' : 'Hide sample';
  }
  if (action === 'next') {
    stopRecognition();
    currentActivityIndex += 1;
    renderActivity();
  }
});

levelCaption.textContent = levelInfo[currentLevel].label;
renderActivity();
renderVideoExercise();
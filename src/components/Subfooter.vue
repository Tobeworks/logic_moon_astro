<template>

    <div id="subfooter" class=" text-secondary-400">
        <nav class="flex justify-center space-x-4">
            <a class="px-2 py-1" @click="openModal1 = true" href="/impressum" id="InputImpressum">Impressum</a>
            <a class="px-2 py-1" href="/datenschutz" @click="openModal2 = true">Datenschutz</a>
            <a class="px-2 py-1" href="https://tobeworks.de">Made with ❤ by Tobeworks</a>
        </nav>
    </div>

    <Modal :is-open="openModal1" @close="openModal1 = false">
        <div class="modal fade" id="modalimpressum" tabindex="-1" aria-labelledby="impressumLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="impressumLabel">Impressum</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="/images/TWBlack.png" alt="Tobeworks Logo" width="120" /><br />
                        <strong>Tobeworks - Tobias Lorsbach<br /> </strong>
                        Neue Universitätsstraße 7<br />
                        55116 Mainz<br /><br />
                        Mobil: 0179/1259004 <br />
                        <p class="reverseaddr">ed.skrowebot@ollah</p>

                        Geschäftsführung: Tobias Lorsbach<br />

                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE
                        021 843 01420<br />
                        <br />
                        Haftungshinweis: Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir
                        keine Haftung für die Inhalte externer Links.<br />
                        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
                        verantwortlich.<p></p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    </Modal>




    <Modal :is-open="openModal2" @close="openModal2 = false">
        <div aria-labelledby="datenschutzLabel" aria-hidden="true">

            <h5 class="modal-title" id="datenschutzLabel">Datenschutz</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <p>
                Diese Datenschutzerklärung klärt Sie in der die Art, dem Umfang und
                Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend kurz
                „Daten“) innerhalb dieses Onlineangebotes und der mit ihm verbundenen
                Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie
                z.B. unser Social Media Profile auf (alles nachfolgend gemeinsam
                bezeichnet als „Onlineangebot“ oder "Webseite"). Im Hinblick auf die
                verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder
                „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der
                Datenschutzgrundverordnung (DSGVO).<br />
                <br />
            </p>
            <h3>Verantwortlicher</h3>
            <p>
                <span>Tobias Lorsbach<br />
                    Neue Universitätsstraße 7<br />
                    55116 Mainz<br />
                </span>
            </p>
            <p class="reverseaddr">ed.skrowebot@ollah</p>
            <p></p>
            <h3>Arten der verarbeiteten Daten:</h3>
            <p>
                - Bestandsdaten (z.B., Namen, Adressen).<br /> - Kontaktdaten (z.B., E-Mail,
                Telefonnummern).<br /> - Inhaltsdaten (z.B., Texteingaben, Fotografien,
                Videos).<br /> - Nutzungsdaten (z.B., besuchte Webseiten, Interesse an
                Inhalten, Zugriffszeiten).<br /> - Meta-/Kommunikationsdaten (z.B., Geräte-Informationen,
                IP-Adressen).<br />
            </p>
            <h3>Kategorien betroffener Personen</h3>
            <p>
                Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir
                die betroffenen Personen zusammenfassend auch als „Nutzer“).<br />
            </p>
            <h3>Zweck der Verarbeitung</h3>
            <p>
                - Zurverfügungstellung des Onlineangebotes, seiner Funktionen und
                Inhalte.<br /> - Beantwortung von Kontaktanfragen und Kommunikation mit
                Nutzern.<br /> - Sicherheitsmaßnahmen.<br /> - Reichweitenmessung/Marketing<br />
                <span></span>
            </p>
            <h3>Verwendete Begrifflichkeiten</h3>
            <p>
                „Personenbezogene Daten“ sind alle Informationen, die sich auf eine
                identifizierte oder identifizierbare natürliche Person (im Folgenden
                „betroffene Person“) beziehen; als identifizierbar wird eine
                natürliche Person angesehen, die direkt oder indirekt, insbesondere
                mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
                Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie)
                oder zu einem oder mehreren besonderen Merkmalen identifiziert werden
                kann, die Ausdruck der physischen, physiologischen, genetischen,
                psychischen, wirtschaftlichen, kulturellen oder sozialen Identität
                dieser natürlichen Person sind.<br />
                <br /> „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren
                ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
                personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch
                jeden Umgang mit Daten.<br />
                <br /> „Pseudonymisierung“ die Verarbeitung personenbezogener Daten in
                einer Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher
                Informationen nicht mehr einer spezifischen betroffenen Person zugeordnet
                werden können, sofern diese zusätzlichen Informationen gesondert aufbewahrt
                werden und technischen und organisatorischen Maßnahmen unterliegen, die
                gewährleisten, dass die personenbezogenen Daten nicht einer identifizierten
                oder identifizierbaren natürlichen Person zugewiesen werden.<br />
                <br /> „Profiling“ jede Art der automatisierten Verarbeitung personenbezogener
                Daten, die darin besteht, dass diese personenbezogenen Daten verwendet
                werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche
                Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich Arbeitsleistung,
                wirtschaftliche Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit,
                Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person zu
                analysieren oder vorherzusagen.<br />
                <br /> Als „Verantwortlicher“ wird die natürliche oder juristische Person,
                Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
                Daten entscheidet, bezeichnet.<br />
                <br /> „Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde,
                Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des
                Verantwortlichen verarbeitet.<br />
            </p>
            <h3>Maßgebliche Rechtsgrundlagen</h3>
            <p>
                Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen
                unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der
                Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die
                Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1
                lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur
                Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen
                sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die
                Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen
                Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die
                Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten
                Interessen ist Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass
                lebenswichtige Interessen der betroffenen Person oder einer anderen
                natürlichen Person eine Verarbeitung personenbezogener Daten
                erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als
                Rechtsgrundlage.
            </p>
            <h3>Sicherheitsmaßnahmen</h3>
            <p>
                Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des
                Stands der Technik, der Implementierungskosten und der Art, des
                Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
                unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos
                für die Rechte und Freiheiten natürlicher Personen, geeignete
                technische und organisatorische Maßnahmen, um ein dem Risiko
                angemessenes Schutzniveau zu gewährleisten.<br />
                <br /> Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit,
                Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs
                zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe,
                der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben
                wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
                Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten.
                Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei
                der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend
                dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche
                Voreinstellungen (Art. 25 DSGVO).<br />
            </p>
            <h3>Zusammenarbeit mit Auftragsverarbeitern und Dritten</h3>
            <p>
                Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen
                Personen und Unternehmen (Auftragsverarbeitern oder Dritten)
                offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die
                Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen
                Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an
                Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur
                Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine
                rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer
                berechtigten Interessen (z.B. beim Einsatz von Beauftragten,
                Webhostern, etc.). <br />
                <br /> Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines
                sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf Grundlage
                des Art. 28 DSGVO.
            </p>
            <h3>Übermittlungen in Drittländer</h3>
            <p>
                Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen
                Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten
                oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder
                Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt
                dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten,
                auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen
                Verpflichtung oder auf Grundlage unserer berechtigten Interessen
                geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse,
                verarbeiten oder lassen wir die Daten in einem Drittland nur beim
                Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO
                verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage
                besonderer Garantien, wie der offiziell anerkannten Feststellung eines
                der EU entsprechenden Datenschutzniveaus (z.B. für die USA durch das
                „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller
                vertraglicher Verpflichtungen (so genannte
                „Standardvertragsklauseln“).
            </p>
            <h3>Rechte der betroffenen Personen</h3>
            <p>
                Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
                betreffende Daten verarbeitet werden und auf Auskunft über diese Daten
                sowie auf weitere Informationen und Kopie der Daten entsprechend Art.
                15 DSGVO.<br />
                <br /> Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung
                der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen
                Daten zu verlangen.<br />
                <br /> Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen,
                dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach
                Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten
                zu verlangen.<br />
                <br /> Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten,
                die Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten
                und deren Übermittlung an andere Verantwortliche zu fordern. <br />
                <br /> Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei
                der zuständigen Aufsichtsbehörde einzureichen.
            </p>
            <h3>Widerrufsrecht</h3>
            <p>
                Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO
                mit Wirkung für die Zukunft zu widerrufen
            </p>
            <h3>Widerspruchsrecht</h3>
            <p>
                Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach
                Maßgabe des Art. 21 DSGVO jederzeit widersprechen. Der Widerspruch
                kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung
                erfolgen.
            </p>
            <h3>Cookies und Widerspruchsrecht bei Direktwerbung</h3>
            <p>
                Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der
                Nutzer gespeichert werden. Innerhalb der Cookies können
                unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär
                dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie
                gespeichert ist) während oder auch nach seinem Besuch innerhalb eines
                Onlineangebotes zu speichern. Als temporäre Cookies, bzw.
                „Session-Cookies“ oder „transiente Cookies“, werden Cookies
                bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot
                verlässt und seinen Browser schließt. In einem solchen Cookie kann
                z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein
                Login-Status gespeichert werden. Als „permanent“ oder „persistent“
                werden Cookies bezeichnet, die auch nach dem Schließen des Browsers
                gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden,
                wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in
                einem solchen Cookie die Interessen der Nutzer gespeichert werden, die
                für Reichweitenmessung oder Marketingzwecke verwendet werden. Als
                „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen
                Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt,
                angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht
                man von „First-Party Cookies“).<br />
                <br /> Wir können temporäre und permanente Cookies einsetzen und klären
                hierüber im Rahmen unserer Datenschutzerklärung auf.<br />
                <br /> Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert
                werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen
                ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen
                des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen
                dieses Onlineangebotes führen.<br />
                <br /> Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des
                Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste,
                vor allem im Fall des Trackings, über die US-amerikanische Seite <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a> oder die EU-Seite <a href="http://www.youronlinechoices.com/">http://www.youronlinechoices.com/</a> erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels
                deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte
                beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes
                genutzt werden können.
            </p>
            <h3>Löschung von Daten</h3>
            <p>
                Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18
                DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht
                im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden
                die bei uns gespeicherten Daten gelöscht, sobald sie für ihre
                Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten
                nicht gelöscht werden, weil sie für andere und gesetzlich zulässige
                Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h.
                die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das
                gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen
                aufbewahrt werden müssen.<br />
                <br /> Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung
                insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und
                4, Abs. 4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher,
                für Besteuerung relevanter Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs.
                1 Nr. 2 und 3, Abs. 4 HGB (Handelsbriefe). <br />
                <br /> Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung
                insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, Belege/Rechnungen,
                Konten, Belege, Geschäftspapiere, Aufstellung der Einnahmen und Ausgaben,
                etc.), für 22 Jahre im Zusammenhang mit Grundstücken und für 10 Jahre bei
                Unterlagen im Zusammenhang mit elektronisch erbrachten Leistungen, Telekommunikations-,
                Rundfunk- und Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten
                erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch genommen
                wird.
            </p>
            <p></p>
            <h3>Geschäftsbezogene Verarbeitung</h3>
            <p></p>
            <p>
                <span>Zusätzlich verarbeiten wir<br />
                    - Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie).<br />
                    - Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie)<br />
                    von unseren Kunden, Interessenten und Geschäftspartner zwecks Erbringung
                    vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung
                    und Marktforschung.</span>
            </p>
            <p></p>
            <h3>Agenturdienstleistungen</h3>
            <p></p>
            <p>
                <span>Wir verarbeiten die Daten unserer Kunden im Rahmen unserer
                    vertraglichen Leistungen zu denen konzeptionelle und strategische
                    Beratung, Kampagnenplanung, Software- und
                    Designentwicklung/-beratung oder Pflege, Umsetzung von Kampagnen und
                    Prozessen/ Handling, Serveradministration, Datenanalyse/
                    Beratungsleistungen und Schulungsleistungen gehören.<br />
                    <br />
                    Hierbei verarbeiten wir Bestandsdaten (z.B., Kundenstammdaten, wie Namen
                    oder Adressen), Kontaktdaten (z.B., E-Mail, Telefonnummern), Inhaltsdaten
                    (z.B., Texteingaben, Fotografien, Videos), Vertragsdaten (z.B., Vertragsgegenstand,
                    Laufzeit), Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie), Nutzungs-
                    und Metadaten (z.B. im Rahmen der Auswertung und Erfolgsmessung von Marketingmaßnahmen).
                    Besondere Kategorien personenbezogener Daten verarbeiten wir grundsätzlich
                    nicht, außer wenn diese Bestandteile einer beauftragten Verarbeitung
                    sind. Zu den Betroffenen gehören unsere Kunden, Interessenten sowie deren
                    Kunden, Nutzer, Websitebesucher oder Mitarbeiter sowie Dritte. Der Zweck
                    der Verarbeitung besteht in der Erbringung von Vertragsleistungen, Abrechnung
                    und unserem Kundenservice. Die Rechtsgrundlagen der Verarbeitung ergeben
                    sich aus Art. 6 Abs. 1 lit. b DSGVO (vertragliche Leistungen), Art. 6
                    Abs. 1 lit. f DSGVO (Analyse, Statistik, Optimierung, Sicherheitsmaßnahmen).
                    Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen
                    Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer
                    Angabe hin. Eine Offenlegung an Externe erfolgt nur, wenn sie im Rahmen
                    eines Auftrags erforderlich ist. Bei der Verarbeitung der uns im Rahmen
                    eines Auftrags überlassenen Daten handeln wir entsprechend den Weisungen
                    der Auftraggeber sowie der gesetzlichen Vorgaben einer Auftragsverarbeitung
                    gem. Art. 28 DSGVO und verarbeiten die Daten zu keinen anderen, als den
                    auftragsgemäßen Zwecken.<br />
                    <br />
                    Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer
                    Pflichten. die Erforderlichkeit der Aufbewahrung der Daten wird alle
                    drei Jahre überprüft; im Fall der gesetzlichen Archivierungspflichten
                    erfolgt die Löschung nach deren Ablauf (6 J, gem. § 257 Abs. 1 HGB, 10
                    J, gem. § 147 Abs. 1 AO). Im Fall von Daten, die uns gegenüber im Rahmen
                    eines Auftrags durch den Auftraggeber offengelegt wurden, löschen wir
                    die Daten entsprechend den Vorgaben des Auftrags, grundsätzlich nach
                    Ende des Auftrags.</span>
            </p>
            <p></p>
            <h3>Kontaktaufnahme</h3>
            <p></p>
            <p>
                <span>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail,
                    Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur
                    Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs.
                    1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher Beziehungen),
                    Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet.. Die
                    Angaben der Nutzer können in einem Customer-Relationship-Management
                    System ("CRM System") oder vergleichbarer Anfragenorganisation
                    gespeichert werden.<br />
                    <br />
                    Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind.
                    Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die
                    gesetzlichen Archivierungspflichten.</span>
            </p>
            <p></p>
            <h3>Hosting und E-Mail-Versand</h3>
            <p></p>
            <p>
                <span>Die von uns in Anspruch genommenen Hosting-Leistungen dienen der
                    Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und
                    Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
                    Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie
                    technische Wartungsleistungen, die wir zum Zwecke des Betriebs
                    dieses Onlineangebotes einsetzen. <br />
                    <br />
                    Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten,
                    Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten
                    von Kunden, Interessenten und Besuchern dieses Onlineangebotes auf Grundlage
                    unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung
                    dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28
                    DSGVO (Abschluss Auftragsverarbeitungsvertrag).</span>
            </p>
            <p></p>
            <h3>Erhebung von Zugriffsdaten und Logfiles</h3>
            <p></p>
            <p>
                <span>Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer
                    berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO
                    Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst
                    befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören
                    Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs,
                    übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp
                    nebst Version, das Betriebssystem des Nutzers, Referrer URL (die
                    zuvor besuchte Seite), IP-Adresse und der anfragende Provider.<br />
                    <br />
                    Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung
                    von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 7
                    Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung
                    zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des
                    jeweiligen Vorfalls von der Löschung ausgenommen.</span>
            </p>
        </div>
    </Modal>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue'
const openModal1 = ref(false)
const openModal2 = ref(false)
</script>
# ssml 

Het weekend na week 2 heb ik onderzoek gedaan naar ssml om te kijken of ik dit kan implementeren in mijn prototype.

SSML oftwel Speech Synthesis Markup Language kan je creeëren door een .ssml tag achter een nieuwe file te zetten. Je kan SSMl aan een HTML file toevoegen.

Petra navigeert vooral met screen readers NVDA voor op de laptop en Voiceover voor haar telefoon. Nu heb ik onderzocht of je met screen readers SSML kan lezen en over het algemeen is dit niet geval en de bedoeling.

### NVDA
NVDA (NonVisual Desktop Access) doesn't natively support SSML (Speech Synthesis Markup Language) parsing or interpretation. NVDA primarily relies on the underlying speech synthesizer installed on the system, such as eSpeak, Microsoft Speech Platform, or other synthesizers.
### Talkback
TalkBack, the screen reader for Android devices, doesn't natively support the interpretation of SSML (Speech Synthesis Markup Language) markup. TalkBack primarily focuses on providing spoken feedback and navigation assistance by interpreting the structural and semantic elements of content, such as HTML markup, within apps and websites.
### Voiceover
VoiceOver, the screen reader on iPhone and other Apple devices, does not directly support the interpretation of SSML (Speech Synthesis Markup Language) markup. VoiceOver primarily focuses on providing spoken feedback and navigation assistance by interpreting the structural and semantic elements of content, such as HTML markup, within apps and websites.

## En nu
Ik heb nog gekeken of er omwegen waren maar dit zou teveel tijd kosten voor een prototype en ik weet ook niet zeker of dit mogelijk was.
Wel is het mogelijk om met MP3 bestanden in mijn html file te stoppen om een beetje the wizard of oz methode te gebruiken en de spraakverandering te simuleren.
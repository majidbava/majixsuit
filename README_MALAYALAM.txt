Majix Suite PWA – അപ്ഡേറ്റ് നിർദ്ദേശങ്ങൾ

1) GitHub Repository-യുടെ root-ൽ index.html, manifest.webmanifest, sw.js, icons/ എന്നിവ അപ്‌ലോഡ് ചെയ്യുക.
2) index.html മാറ്റുമ്പോൾ അതേ പേരിൽ replace ചെയ്ത് commit ചെയ്യുക.
3) sw.js-ലുള്ള CACHE_VERSION (ഉദാ. majix-suite-v2) ഓരോ പ്രസിദ്ധീകരണത്തിലും v3, v4 എന്നിങ്ങനെ കൂട്ടുന്നത് ശുപാർശ ചെയ്യുന്നു. ഇതിലൂടെ cache ഉറപ്പായി പുതുക്കാം.
4) ഇൻസ്റ്റാൾ ചെയ്ത ആപ്പ് ഇന്റർനെറ്റോടെ തുറക്കുമ്പോൾ പുതിയ Service Worker പരിശോധിക്കും. പുതിയ പതിപ്പ് ലഭിച്ചാൽ Update Available അറിയിപ്പ് കാണിക്കും. Update Now അമർത്തുമ്പോൾ പുതിയ പതിപ്പ് സജീവമാക്കി ആപ്പ് reload ചെയ്യും.
5) കമ്പ്യൂട്ടറിൽ index.html നേരിട്ട് തുറക്കുമ്പോൾ Service Worker രജിസ്റ്റർ ചെയ്യില്ല; സാധാരണ HTML ആയി പ്രവർത്തിക്കും.

ശ്രദ്ധിക്കുക: ആദ്യമായി PWA തുറക്കുമ്പോൾ ഇന്റർനെറ്റ് ആവശ്യമാണ്. GitHub Pages deploy പൂർത്തിയായ ശേഷമാണ് പുതിയ പതിപ്പ് ലഭിക്കുക. LocalStorage ഡാറ്റ/സെറ്റിങ്സ് മായ്ക്കുന്ന കോഡ് ഈ അപ്ഡേറ്റ് സംവിധാനം ചേർത്തിട്ടില്ല.


PDF Outer Border Fix (v13): Itinerary Generator-ന്റെ PDF/Print ഔട്ട്പുട്ടിൽ JPG-യിലെ അതേ 1px outer border-ും 12px rounded corners-ും നിലനിർത്തി. മറ്റ് ഫീച്ചറുകൾ മാറ്റിയിട്ടില്ല.

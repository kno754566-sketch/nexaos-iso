function spacer(p) { var s = p.addWidget("org.kde.plasma.panelspacer"); s.currentConfigGroup = ["General"]; s.writeConfig("expanding", "true"); }
var p = panels()[0];
if (p) {
  var ids = p.widgetIds;
  for (var i = 0; i < ids.length; i++) { p.widgetById(ids[i]).remove(); }
  p.location = "bottom";
  p.height = 46;
  spacer(p);
  var k = p.addWidget("org.kde.plasma.kickoff");
  k.currentConfigGroup = ["General"];
  k.writeConfig("icon", "nexaos-logo");
  var t = p.addWidget("org.kde.plasma.icontasks");
  t.currentConfigGroup = ["General"];
  t.writeConfig("fill", "false");
  t.writeConfig("launchers", "applications:nexaweb.desktop,applications:org.kde.dolphin.desktop,applications:org.kde.konsole.desktop,applications:nexastore.desktop,applications:nexacenter.desktop,applications:org.kde.plasma-systemmonitor.desktop");
  spacer(p);
  p.addWidget("org.kde.plasma.systemtray");
  p.addWidget("org.kde.plasma.digitalclock");
  p.addWidget("org.kde.plasma.showdesktop");
}

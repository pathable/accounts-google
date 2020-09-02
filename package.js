Package.describe({
  summary: "Login service for Google accounts",
  version: "1.0.1",
  name: 'pathable:accounts-google',
  git: 'https://github.com/pathable/accounts-google',
});

Package.onUse(api => {
  api.versionsFrom('1.10.3-beta.9');

  api.use(['ecmascript']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('pathable:google-oauth@1.0.1');
  api.imply('pathable:google-oauth');

  // If users use accounts-ui but not google-config-ui, give them a tip.
  api.use(['accounts-ui', 'google-config-ui'], ['client', 'server'], { weak: true });
  api.addFiles("notice.js");

  api.addFiles("google.js");
});



module.exports = state => state.cv = {
  title: 'Corey Michael Trampe',
  subtitle: 'jaded former wannabe indie developer',

  sections: [
    {
      title: 'Consultant',
      subtitle: 'Since Fall 2006',
      
      items: [
        {
          company: 'InboundLabs',
          start: 'August 2019',
          end: 'December 2019',
          built: `HubSpot integrations, standalone apps and widgets`,
          used: `JavaScript, HTML, CSS, NodeJS, Choo, Tachyons, AWS, Vercel (Zeit), FaunaDB`,
        },

        {
          company: 'ElkFox',
          start: 'November 2018',
          end: 'April 2019',
          built: `a bespoke engine for realtime Shopify apps (mostly, until the funding ran out!)`,
          used: `JavaScript, NodeJS, PostgreSQL (LISTEN/NOTIFY), Heroku, Shopify, Choo (monoapp with React for Shopify Polaris)`,
        },

        {
          company: 'Azumo LLC',
          start: 'November 2017',
          end: 'April 2018',
          built: `hired to work on (my project or one closely related), but actually arbritraged out to another company as a subcontractor on unrelated work, and generally blocked. Developed a tic.`,
          used: `JavaScript, Node, React`,
        },

        {
          company: 'InboundLabs',
          start: 'November 2015',
          end: 'August 2016',
          built: `internal tooling, experiments and prototypes, HubSpot integrations`,
          used: `JavaScript, HTML, CSS, NodeJS, Choo, Tachyons, AWS, Vercel (Zeit), Elm (lol), FieldBook, Airtable, google Firebase, WebRTC (video / data)`,
        },
      ]
    },

    {
      title: 'Founder',
      subtitle: '',

      items: [
        {
          company: 'Slater Systems, LLC',
          start: 'April 2018',
          end: 'June 2019',
          built: `many unfinished iterations on a novel computing concept based on messaging and a "Wizard of Oz" approach to gradual software specification and implementation`,
          used: `JavaScript, NodeJS, FaunaDB, Choo, Tachyons, Sodium, Wire Open Source, (previous versions used hypercore (DAT), RethinkDB, other things)`,
        },

        {
          company: 'Lucian Software, LLC',
          start: 'June 2015',
          end: 'August 2016',
          built: `many prototypes / demos of "headless Shopify" apps / widgets before that was a thing. Attempted to build a productized consulting business around that concept, but was overwhelmed. Spent too much time trying to hunt and close clients. (How do I do sales?) Started forming the concepts that would become "Slater". Launched "stepping stone product", talky.cards, a web interface to API.ai (now DialogFlow).`,
          used: `JavaScript, CoffeeScript, Python, Shopify, Dialogflow, Stripe, Rasa.ai, RethinkDB, Choo, Tachyons, lots of other stuff`,
        },

        {
          company: 'Lucian Games, LLC',
          start: 'July 2011',
          end: 'September 2014',
          built: `many game prototypes in several genres, using a wide variety of languages, frameworks, and engines. Shipped one title, "Oware: Earth's Oldest Living Board Game", in Apple's App Store, Android Market (Google Play: https://play.google.com/store/apps/details?id=com.luciangames.oware&hl=en_US), and several others`,
          used: `JavaScript, CoffeeScript, Python, Boo, UnityScript, Lua, C#, C++, Java, Haxe, Unity, GamePlay3D, libGDX, bespoke voxel engines... I don't even remember what all now. (Shipped final Oware in Unity with Boo)`,
        },
      ]
    }
  ]
}

# Source 10: SEJ — WPForms Lite "backdoor" test

- URL: https://www.searchenginejournal.com/wpforms-lite-accused-of-adding-backdoor-i-tested-it-and-was-surprised/585273/
- Retrieved: 2026-08-21
- Type: industry
- Recency: 2026-08 (Waaijer claim dated ~three weeks after WPForms Lite 2.0.0)
- Credibility: 4
- Bias: SEO trade press; reproduces competitor claim then tests
- Used for: H3

## Verbatim quotes

> Sybre Waaijer posted on X that a recent update to Awesome Motive’s WPForms Lite had inserted a backdoor into the plugin.

> “It takes over your browser and opens their app on WPForms’ servers. It hands that app a one-hour login token for your site. Their app can then act on your behalf on your site.”

> “The plugin never asks first and never warns you.”

> “”Backdoor” is doing a lot of rhetorical work here. It isn’t in the conventional sense. There’s no vendor-initiated access path, no auth bypass, and no hidden listener. It requires a logged-in administrator to actually trigger the wizard.”

> I thought I was still on my website. But I was already on another site.

> Once you’re in the configuration wizard it obligates you to install two additional plugins because you cannot untick the boxes.

## Notes

Independent reproduction: offsite wizard, forced plugin installs, consent opacity. Not a classic backdoor per NIST/community pushback, but a live trust-surface failure in a 5M+ install product.

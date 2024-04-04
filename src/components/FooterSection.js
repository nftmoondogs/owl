// components/FooterSection.js
import React from 'react';

const FooterSection = () => {
  return (
    <footer id="foundation" className="bg-black text-white py-12 px-4">
      <div className="container mx-auto text-center">
        {/* Logo and title */}
        <div className="mb-6">
          <img src="https://i.ibb.co/89ZsmGd/pwc-phoenix-purple.gif" alt="Wen Logo" className="mx-auto mb-4" style={{ height: '80px' }} />
          <h2 className="font-courier-bold text-2xl">OWL Token</h2>
        </div>
        
        {/* Description */}
        <p className="font-simpfxo mx-auto leading-relaxed max-w-2xl">
        Dear Night Fliers of the $OWL Brigade,

We've hatched a plan so bold, not even the wisest of owls could've seen it coming – soaring on Solana's speed like a worm is not just early, but on the blockchain! Remember, while the crypto bats hang upside down, we're the ones who give a hoot and keep the night alive with our degen calls. Let's talon-ted traders stick together; after all, in a world full of pigeons, be an $OWL. Keep your feathers fluffed, your beaks sharp, and your portfolios diversified – because when the moon hits your eye like a big pizza pie, that's a-moon-lambo!

Hoots and Toots,
Your Supreme Owl Commander
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

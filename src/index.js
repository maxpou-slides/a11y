import React from 'react';
import ReactDOM from 'react-dom';
import lareneTweetImg from './img/larene-tweet.png';
import youtubeImg from './img/youtube.png';
import lighthouseImg from './img/lighthouse.png';
import axeImg from './img/axe.png';
import randomImg from './img/random-img.png';
import emulateVisionVideo from './img/emulateVisionDeficiencies.mp4';
import './css/index.css';

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  Notes,
  OrderedList,
  Link,
  Quote,
  Progress,
  Slide,
  Stepper,
  Text,
  UnorderedList,
  indentNormalizer,
} from 'spectacle';

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const cssTricksCodeBlock = indentNormalizer(`
  img:not([alt]),
  img[alt=""] {
    border: 5px dashed red;
  }
`)

const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="80px">
        Making WebApps Accessible for Everyone
        </Heading>

        <Heading margin="0px 32px" color="primary" fontSize="h2">
          Maxence Poutord - @_maxpou
        </Heading>
      </FlexBox>
    </Slide>
    <Slide
      backgroundColor="tertiary"
      backgroundImage="url(https://heise.cloudimg.io/width/1220/q50.png-lossy-50.webp-lossy-50.foil1/_www-heise-de_/imgs/18/2/7/8/7/7/9/3/AoE2_Header_Microsoft-f5960ac0d6c87473.png)"
      backgroundOpacity={0.5}
    >
      <Heading>The day I lost that battle...</Heading>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="80px">
          Making WebApps Accessible for Everyone
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h2">
          Maxence Poutord - @_maxpou
        </Heading>
      </FlexBox>
    </Slide>
    <Slide>
      <Image src={lareneTweetImg} alt="Larene's Tweet https://twitter.com/LareneLg/status/1270578058714443776" style={{objectFit: 'contain'}}/>
    </Slide>
    <Slide>
      <Heading>Types of Disabilities</Heading>
      <UnorderedList>
        <ListItem>👨‍🦯 Visual</ListItem>
        <ListItem>👂 Auditory</ListItem>
        <ListItem>🗣 Speach</ListItem>
        <ListItem>👩‍🦼 Motor</ListItem>
        <ListItem>🧠 Cognitive</ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Building an a11y Friendly webapp in 5 steps</Heading>
    </Slide>

    <Slide>
      <Heading>Step 1. Unplug your mouse</Heading>
    </Slide>
    <Slide>
      <Heading >Exercice: keyboard only feature</Heading>
      <Text>🕵️‍♀️What to spot?</Text>
      <UnorderedList>
        <ListItem>Where's the focus</ListItem>
        <ListItem>Click works with enter</ListItem>
        <ListItem>Non-focusable items</ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Antipattern</Heading>
      <CodePane
        fontSize={18}
        language="css"
        autoFillHeight
      >
      {indentNormalizer(`
        :focus {
          outline: none;
        }
      `)}
      </CodePane>
      <div className='antipatternOutline'>
        <button className='btn'>Button 1</button>
        <button className='btn noOutline'>Button 2</button>
        <button className='btn'>Button 3</button>
      </div>
    </Slide>

    <Slide>
      <Heading>Cool patterns</Heading>
      <Image src={youtubeImg} alt="Youtube skip navigation" style={{width: '100%'}}/>
    </Slide>

    <Slide>
      <Heading>Step 2. Get tools</Heading>
      <Text>https://accessibilityinsights.io</Text>
    </Slide>
    <Slide>
      <Heading style={{marginBottom: '0'}}>Lighthouse</Heading>
      <Image src={lighthouseImg} alt="Lighthouse audit for Aliexpress.com" style={{width: '70%', margin: '0 auto'}}/>
    </Slide>
    <Slide>
      <Heading style={{marginBottom: '0'}}>Axe</Heading>
      <Image src={axeImg} alt="Axe audit for apple.com" style={{width: '85%', margin: '0 auto'}}/>
    </Slide>
    <Slide>
      <Heading>CSS Hack</Heading>
      <CodePane
        fontSize={18}
        language="css"
        autoFillHeight
      >
        {cssTricksCodeBlock}
      </CodePane>
      <Image src={randomImg} style={{width: '25%', margin: '0 auto'}}/>
    </Slide>

    <Slide>
      <Heading>Step 3. RTFM</Heading>
    </Slide>
    <Slide>
      <Heading>w3.org</Heading>
      <Link href="https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex" target="_blank" rel="noopener noreferrer">
        https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex
      </Link>
    </Slide>
    <Slide>
      <Heading>Is My Component a11y friendly?</Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://v5.getbootstrap.com/docs/5.0/components/collapse/" target="_blank" rel="noopener noreferrer">
          v5.getbootstrap.com
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://polaris.shopify.com/components/navigation/tabs#navigation" target="_blank" rel="noopener noreferrer">
          polaris.shopify.com
          </Link>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Don't forget</Heading>
      <Quote>No ARIA is better than Bad ARIA</Quote>
    </Slide>

    <Slide>
      <Heading>Step 4. Mimic disabilities</Heading>
    </Slide>
    <Slide>
      <Heading style={{marginBottom: '0'}}>DevTools</Heading>
      <Text style={{margin: '0 auto'}}><strike>Chrome</strike> Brave &gt; rendering &gt; Emulate vision deficiencies</Text>
      <video src={emulateVisionVideo} autoPlay="true" controls style={{width: '60%', margin: '0 auto'}} />
    </Slide>
    <Slide>
      <Heading>Use a screen reader!</Heading>
      <Text>iOS: VoiceOver</Text>
      <Text>Windows: NVDA</Text>
      <Text>Android: Talkback</Text>
    </Slide>
    <Slide>
      <Heading>VoiceOver: cheat sheet</Heading>
      <Text>
        <code>⌘</code> + <code>F5</code>: Start/Stop
        <br/>
        <code>⇪</code>: VoiceOver Activation Key (VO)
        <br/>
        <code>VO</code> + <code>U</code>: Open Rotor
        <br/>
        <code>VO</code> + <code>⌘</code> + <code>← / →</code>: increase/decrease voice speed
        <br/>
        <code>VO</code> + <code>A</code> / <code>control</code>: start/stop reading
        <br/>
        <code>VO</code> + <code>← / →</code>: read next/previous item
      </Text>
    </Slide>
    <Slide>
      <Heading>🔎 What do you need to spot?</Heading>
      <Text>Missing labels on forms, alt</Text>
      <Text>Misformatted tables</Text>
    </Slide>

    <Slide>
      <Heading>👍 Worth watching</Heading>
      <iframe 
        src="https://www.youtube.com/embed/dEbl5jvLKGQ" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        style={{width: '60%', height: '60%', margin: '0 auto'}}
      ></iframe>
    </Slide>

    <Slide>
      <Heading>Step 5. Keep learning</Heading>
    </Slide>

    <Slide>
      <Heading>Twittersphere</Heading>
      <Text>https://twitter.com/LareneLg and her amazing thread (https://twitter.com/LareneLg/status/1262197938685530113)</Text>
      <Text>https://twitter.com/A11YProject</Text>
    </Slide>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));

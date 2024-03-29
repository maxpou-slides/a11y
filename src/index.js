import React from 'react';
import ReactDOM from 'react-dom';
import lareneTweetImg from './img/larene-tweet.png';
import youtubeImg from './img/youtube.png';
import lighthouseImg from './img/lighthouse.png';
import axeImg from './img/axe.png';
import randomImg from './img/random-img.png';
import emulateVisionVideo from './img/emulateVisionDeficiencies.mp4';
import A11YInsights from './img/a11yInsights.mp4';
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
        <Appear elementNum={0}><ListItem>👨‍🦯 Visual</ListItem></Appear>
        <Appear elementNum={1}><ListItem>👂 Auditory</ListItem></Appear>
        <Appear elementNum={2}><ListItem>🗣 Speach</ListItem></Appear>
        <Appear elementNum={3}><ListItem>👩‍🦼 Motor</ListItem></Appear>
        <Appear elementNum={4}><ListItem>🧠 Cognitive</ListItem></Appear>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading margin="15% 0px">Building an a11y Friendly webapp in 5 steps</Heading>
    </Slide>

    <Slide>
      <Heading>Step 1. Unplug your mouse</Heading>
    </Slide>
    <Slide>
      <Heading >Exercice: keyboard only feature</Heading>
      <Text>🕵️‍♀️ What to spot?</Text>
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
        <button className='btn' onClick={() => console.log('Button 1')}>Button 1</button>
        <button className='btn noOutline' onClick={() => console.log('Button 2')}>Button 2</button>
        <button className='btn' onClick={() => console.log('Button 3')}>Button 3</button>
        <a className='btn' onClick={() => console.log('Button 4')} onKeyUp={() => console.log('Button 4')}>Button 4</a>
        <button className='btn' onClick={() => console.log('Button 5')}>Button 5</button>
      </div>
    </Slide>

    <Slide>
      <Heading>Cool patterns</Heading>
      <Image src={youtubeImg} alt="Youtube skip navigation" style={{width: '100%'}}/>
    </Slide>

    <Slide>
      <Heading>Step 2. Get tools</Heading>
    </Slide>
    <Slide>
      <Heading style={{marginBottom: '0'}}>Lighthouse</Heading>
      <Image src={lighthouseImg} alt="Lighthouse audit for Aliexpress.com" style={{width: '70%', margin: '0 auto'}}/>
    </Slide>
    <Slide>
      <Heading style={{marginBottom: '0'}}>Accessibility Insights</Heading>
      <video src={A11YInsights} autoPlay={true} controls style={{width: '60%', margin: '0 auto'}} />
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
        w3.org/TR/wai-aria-practices-1.1/#aria_ex
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
      <Heading>What do you prefer?</Heading>

      <CodePane
        fontSize={18}
        language="html"
        autoFillHeight
      >
      {indentNormalizer(`
        <button>Save</button>
        `)}
      </CodePane>
      <Text>OR:</Text>
      <CodePane
        fontSize={18}
        language="html"
        autoFillHeight
      >
      {indentNormalizer(`
        <div tabindex="0" role="button" onclick="btnHandler(event)" onKeyDown="btnHandler(event)">
          Save
        </div>
        <script>
        function btnHandler(event) {
          if (event instanceof KeyboardEvent && event.key !== 'Enter' && event.key !== ' ') {
            return;
          }
          // function's body
        }
        </script>
      `)}
      </CodePane>
    </Slide>
    <Slide>
      <Heading style={{marginTop: '20%'}}><i>"No ARIA is better than Bad ARIA"</i></Heading>
    </Slide>

    <Slide>
      <Heading>Step 4. Mimic disabilities</Heading>
    </Slide>
    <Slide>
      <Heading style={{marginBottom: '0'}}>DevTools</Heading>
      <Text style={{margin: '0 auto'}}><strike>Chrome</strike> Brave &gt; rendering &gt; Emulate vision deficiencies</Text>
      <video src={emulateVisionVideo} autoPlay={true} controls style={{width: '50%', margin: '0 auto'}} />
      <form id="emulateVisionForm">
        <input id="username-demo" type="text" placeholder="enter your email" onKeyUp={() => {
          const input = document.getElementById('username-demo')
          if (input.value === '') {
            input.className='';
            return;
          }
          const isEmail = /\S+@\S+\.\S+/.test(input.value)
          isEmail ? input.className="valid" : input.className="invalid"
        }}/>
      </form>
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
      <UnorderedList>
        <ListItem>Missing labels on forms, alt on images...</ListItem>
        <ListItem>Wrong/missing state (i.e. <Link href="https://v5.getbootstrap.com/docs/5.0/components/dropdowns/" target="_blank" rel="noopener noreferrer">dropdown</Link>)</ListItem>
        <ListItem>Wrong item (link vs. button...)</ListItem>
        <ListItem>Misformatted tables</ListItem>
      </UnorderedList>
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
      <UnorderedList>
        <ListItem>
          <Link href="https://web.dev/lighthouse-accessibility/" target="_blank" rel="noopener noreferrer">
          web.dev/lighthouse-accessibility
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility" target="_blank" rel="noopener noreferrer">
          MDN - developer.mozilla.org
          </Link>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Twittersphere</Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://twitter.com/LareneLg" target="_blank" rel="noopener noreferrer">
            @LareneLg
          </Link> and her<Link href="https://twitter.com/LareneLg/status/1262197938685530113" target="_blank" rel="noopener noreferrer">
          fantastic thread
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://twitter.com/A11YProject" target="_blank" rel="noopener noreferrer">
            @A11YProject
          </Link>
        </ListItem>
      </UnorderedList>
    </Slide>

    <Slide>
      <Heading>Thanks!</Heading>
    </Slide>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));

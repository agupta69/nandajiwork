import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    backgroundImage:"url('http://localhost:3000/ai3.jpg')",
    backgroundSize:'auto',
    //filter: 'blur(2px)',
    width: '100%',
    height: '500px',
    position: 'fixed',
    color:'white',
    //textAlign: "center",
    fontFamily: "Arial",
    fontSize:"20px",
    padding:'15px',
    fontWeight:'bold'
  },
}));
const gridCss={
    color:'white',
    textAlign: "center",
    fontFamily: "Arial",
    fontSize:"20px",
    padding:'15px'
   }

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar style={{ background: 'transparent', boxShadow: 'none',color:'white'}} position="static" color="default">
        <Tabs
        style={{color:'white'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab style={{color:'white'}} label="About" {...a11yProps(0)} />
          <Tab style={{color:'white'}} label="Programs" {...a11yProps(1)} />
          <Tab style={{color:'white'}} label="Testomonial" {...a11yProps(2)} />
          <Tab style={{color:'white'}} label="Blog" {...a11yProps(3)} />
          <Tab style={{color:'white'}} label="Privacy Policy" {...a11yProps(4)} />
          <Tab  style={{color:'white'}} label="Terms & Condition" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      Artificial intelligence (AI) is wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence. AI is an interdisciplinary science with multiple approaches, but advancements in machine learning and deep learning are creating a paradigm shift in virtually every sector of the tech industry. 
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
      Privacy Policy For www.cruxofai.com
At cruxofai, accessible from www.cruxofai.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by cruxofai and how we use it.
If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at team@cruxofai.com

Log Files
cruxofai follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.

Cookies And Web Beacons
Like any other website, cruxofai uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.

Google DoubleClick DART Cookie
Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – https://policies.google.com/technologies/ads

Privacy Policies
You may consult this list to find the Privacy Policy for each of the advertising partners of cruxofai.
Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on cruxofai, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
Note that cruxofai has no access to or control over these cookies that are used by third-party advertisers.


Third-Party Privacy Policies
cruxofai Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?

Children's Information
Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
cruxofai does not knowingly collect any Personal Identifiable Information from children under the age of 6. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.

Online Privacy Policy Only
This Privacy Policy (created with the GDPR Privacy Policy Generator) applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in cruxofai. This policy is not applicable to any information collected offline or via channels other than this website.
      </TabPanel>
      <TabPanel value={value} index={5}>
      PLEASE READ THE FOLLOWING TERMS CAREFULLY BEFORE USING THIS WEBSITE.

The operator of this website (“we” or “us”) offers access to the website (the “Site”) conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (collectively, “Terms”) and the Privacy Policy displayed on the Site. In addition, particular features, applications, and activities offered as part of the Site may also be subject to additional terms specified in connection with such features, applications, and activities, all of which are incorporated herein by reference.

BY ACCESSING OR USING THE SITE, YOU AGREE TO THESE TERMS AND THE PRIVACY POLICY. IF YOU DO NOT AGREE TO THESE TERMS AND THE PRIVACY POLICY, DO NOT USE THE SITE.

Please review the Applicable Laws and Disputes section of these Terms for complete details.

MODIFICATION OF THESE TERMS
From time to time, we may change these Terms. When we do, the “Last Updated” line above will be revised. You are responsible for regularly reviewing these Terms. Your continued use of the Site following the posting of changes to the Terms indicates your acceptance of those changes. Unless we provide you with specific notice, no changes to the Terms will apply retroactively.

ELIGIBILITY
The Site is not intended for use by people who are younger than age 6. Do not use the Site if you are under 6.

PERSONAL USE OF SITE
The Site is for your personal, non-commercial use only. You shall not sell or commercially exploit in any manner the Site, access to the Site, or any of the content that is featured or displayed on the Site (“Content”). You shall not modify, distribute, transmit, display, perform, reproduce, publish, create derivative works from or transfer any of the Content without our express written permission. You acknowledge that any unauthorized use of any Content could cause irreparable harm to us and agree that in the event of any such unauthorized use, we will be entitled to an injunction in addition to any other remedies available at law or in equity.

We may suspend or terminate your account or your use of the Site at any time, for any reason or for no reason, including in the event that you violate these Terms, we are unable to verify or authenticate any information you provide to us or we believe that your actions may cause losses to, or legal liability for, you, other users of the Site or us.

You shall not use any robot, spider, scraper, or other automated means to access the Site or any website provided as part of the Site for any purpose without our express written permission. You shall not (a) take any action that imposes, or may impose, in our sole discretion an unreasonable or disproportionately large load on our infrastructure, (b) interfere or attempt to interfere with the proper working of any of the Site or (c) bypass any measures we may use to prevent or restrict access to the Site.

USER SUBMISSIONS
Any comment, material, information or other communication that you post, upload or submit to the Site or that is displayed on the Site at your direction (each a “Communication”) will be considered non-confidential and non-proprietary, and we will be under no obligation to maintain the confidentiality of any Communication.

You are responsible for your Communications. You shall ensure that your Communications do not infringe any copyright or trademark, do not defame or constitute trade libel with respect to any person, entity, product or service, or violate any other rights of any other person or entity. You shall be solely liable for any claims, damages, or other liabilities resulting from your use of the Site or your uploading, posting, or submission of any Communication or the content of any of your Communications.

Any opinions, advice, statements or other information contained in Communications are those of the author and not of us. We do not endorse or guarantee the accuracy, completeness, or usefulness of any Communication. Please do your best to ensure that your own Communications are accurate.
By posting, uploading or otherwise submitting any Communication, you grant to us a non-exclusive, perpetual, irrevocable, royalty-free, fully paid-up worldwide, fully sublicensable right to use, reproduce, modify, adapt, publish, sell, translate, create derivative works from, archive, aggregate, distribute, transmit, perform and display such Communication and your name, likeness, voice, statements, and endorsements as incorporated therein, in whole or in part, in any manner and in any media, format or technology, whether now or later known or developed, including all promotion, advertising, marketing, merchandising, publicity and any other ancillary uses thereof, and including the unlimited right to sublicense such rights, in perpetuity throughout the universe, without any further notice or payment to or permission from you.

We may, but are not obligated to, monitor, or review Communications. We are not in any manner responsible for the content of Communications. By providing you with the ability to view and distribute user-generated and/or user-submitted content on the Site, we are not undertaking any obligation or liability relating to any such content, including without limitation any liability arising under the laws relating to copyrights, trademarks, defamation, privacy or obscenity or any other applicable law. However, we reserve the right to block or remove any Communication, including without limitation any Communication that in our sole discretion we determine violates the Code of Conduct.

LIABILITY DISCLAIMER FOR EDITORIAL CONTENT
The Site contains reviews, opinions, and information regarding products and services manufactured or provided by third parties. We are not responsible in any way for such products and services, and nothing contained on the Site should be construed as a guarantee of the functionality, utility, safety, or reliability of any product or services reviewed or discussed on the Site. Please follow the directions provided by the manufacturer or service provider when using any product or service reviewed or discussed on the Site.

Although we use reasonable efforts to ensure that the Content we prepare is accurate and informative, we cannot guarantee the accuracy or completeness of the Content. Under no circumstances will we be liable in any way for any Content, including, but not limited to, any errors or omissions in such Content, any loss or damage of any kind incurred as a result of your reliance on such Content or the use of any product or service reviewed or discussed in such Content.

The Site may from time to time include Content concerning medical/legal/financial/ health-related products or services. However, we do not provide medical/legal/financial advice. The reader should consult his or her medical/legal/financial professional before adopting any suggestion contained in, drawing any inference from or taking any other action in reliance on any Content that addresses such issues. 

The Content Provided on this site/blog is for educational purposes only. We are not responsible for any adverse consequences arising out of your use of our advice and opinions.

DISCLAIMER
We make no warranties or representations about the accuracy or completeness of any Content or any Communication.
ALL OF THE CONTENT, COMMUNICATIONS, INFORMATION AND FUNCTIONALITY CONTAINED IN AND/OR PROVIDED VIA THE SITE, INCLUDING, WITHOUT LIMITATION, TEXT, GRAPHICS, AND LINKS, ARE PROVIDED “AS IS” AND WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, FREEDOM FROM COMPUTER VIRUS, AND WARRANTIES ARISING FROM COURSE OF DEALING OR COURSE OF PERFORMANCE. WE DO NOT REPRESENT OR WARRANT THAT THE FUNCTIONS CONTAINED IN THE SITE WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SITE OR THE SERVER THAT MAKES THE SITE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DO NOT MAKE ANY WARRANTIES OR REPRESENTATIONS REGARDING THE USE OF THE CONTENT OR COMMUNICATIONS IN THE SITE IN TERMS OF THEIR COMPLETENESS, CORRECTNESS, ACCURACY, ADEQUACY, USEFULNESS, TIMELINESS, RELIABILITY OR OTHERWISE. THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU IF THEY ARE NOT PERMITTED UNDER THE LAWS OF THE JURISDICTION IN WHICH YOU RESIDE.

LIMITATION OF LIABILITY
IN NO EVENT WILL WE BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL, EXEMPLARY OR CONSEQUENTIAL, DAMAGES, OR ANY DAMAGES WHATSOEVER, EVEN IF WE HAVE BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, WHETHER IN AN ACTION UNDER CONTRACT, NEGLIGENCE, OR ANY OTHER THEORY, ARISING OUT OF OR IN CONNECTION WITH THE USE, INABILITY TO USE, OR PERFORMANCE OF THE INFORMATION, SITE, PRODUCTS, FUNCTIONALITY AND MATERIALS AVAILABLE FROM THIS SITE. THESE LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY. BECAUSE SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, OR THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.


INDEMNIFICATION
You agree to indemnify, defend, and hold us harmless from and against all losses, expenses, damages, and costs, including reasonable attorneys’ fees, resulting from any violation by you of these Terms and/or your use of the Site.

APPLICABLE LAW AND DISPUTES
These Terms will be governed by and interpreted in all respects in accordance with the substantive laws of India, without regard to its choice of law provisions. You hereby irrevocably consent to such venue and to the exclusive jurisdiction of any such court over any such dispute. Any and all disputes directly or indirectly arising out of or relating to the Terms or the Site will be resolved individually, without resort to any form of class action. Any and all claims, judgments, and awards will be limited to actual out-of-pocket costs incurred, and in no event shall you be entitled to recovery of attorneys’ fees. Under no circumstances will any claimant be permitted to obtain any award for, and you hereby waive all rights to claim, punitive, special, incidental or consequential damages and any and all rights to have damages multiplied or otherwise increased and any other damages, other than for actual out-of-pocket expenses.
Any cause of action or claim you may have directly or indirectly arising out of or relating to the Terms or the Site must be commenced within one (1) year after the claim or cause of action arises.
Our failure to insist upon or enforce strict performance of any provision of these Terms shall not be construed as a waiver of any provision or right. Neither the course of conduct between the parties nor trade practice shall act to modify any of these Terms. We may assign our rights and duties hereunder to any party at any time.
We make no representation that the contents of the Site are appropriate or available for use in locations outside of India. Access to the Site from territories where their content is illegal is prohibited. Those who choose to access the Site from locations outside of India do so on their own initiative and risk and are responsible for compliance with applicable local laws. You may not use or export any Content in violation of Indian export laws and regulations.

INTELLECTUAL PROPERTY
The Site is our property. The Site may include content owned by others that is licensed to us. ALL RIGHTS RESERVED.


NOTICES AND PROCEDURES FOR MAKING CLAIMS OF COPYRIGHT INFRINGEMENT
ALL INQUIRIES NOT RELEVANT TO OR NOT COMPLYING WITH THE FOLLOWING PROCEDURE WILL RECEIVE NO RESPONSE.
We respect the intellectual property of others, and we ask our users and visitors to do the same. We will process and investigate Notices and will take appropriate actions under the Digital Millennium Copyright Act (“DMCA”) and other applicable intellectual property laws. Upon receipt of a Notice complying with the DMCA, we will act to remove or disable access to any material found to be infringing or found to be the subject of infringing activity and will act to remove or disable access to any reference or link to material or activity that is found to be infringing.
If you believe that your work has been copied in a way that constitutes copyright infringement, please provide us the following information. Please be advised that to be effective, the Notice must include ALL of the following:
a physical or electronic signature of the person authorized to act on behalf of the owner of an exclusive copyright that is allegedly infringed;
a description of the copyrighted work that you claim has been infringed;
a description of where the material that you claim is infringing is located on the Site;
your address, telephone number, and email address and all other information reasonably sufficient to permit us to contact you;
a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;
a statement by you, made under penalty of perjury, that the above information in your Notice is accurate and that you are the copyright owner or authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.

Notices of claimed copyright infringement should be directed to:
By email: team@cruxofai.com

IMPORTANT NOTE: THE PRECEDING INFORMATION IS PROVIDED EXCLUSIVELY FOR NOTIFYING US THAT YOUR COPYRIGHTED MATERIAL MAY HAVE BEEN INFRINGED. ALL OTHER INQUIRIES, SUCH AS PRODUCT OR SERVICE RELATED QUESTIONS AND REQUESTS, WILL NOT RECEIVE A RESPONSE THROUGH THIS PROCESS.



CODE OF CONDUCT
You shall not, and shall not authorize or facilitate any attempt by another person or entity to:
Post, transmit, or cause to be exhibited or displayed on or using the Site any Communication that is harmful, threatening, abusive, harassing, vulgar, offensive, obscene, pornographic, lewd, lascivious or otherwise objectionable, in whole or in part, or that interferes with anyone’s use or enjoyment of the Site, as determined by us in our sole discretion;
Post, transmit, or cause to be exhibited or displayed on or using the Site any Communication that infringes another person or entity’s copyright, trademark, right of publicity or other personal or proprietary right or violates any applicable law;
Impersonate another person or entity;
Solicit personally identifiable information from any person;
Engage in disruptive activity such as posting Communications that are unrelated to a forum’s designated topic or theme; or
Invade the privacy of any person, including posting personally identifying or otherwise private or sensitive information about a person without their consent or harvesting personally identifiable information about users of the Site.

THIRD-PARTY SITES
The Site may contain links to other sites on the Internet, all of which have their own privacy and data collection practices. Links to sites are provided only for your convenience and you access such sites at your own risk. Links do not imply that we sponsor, endorse, are affiliated with or associated with, or have been legally authorized to use any trademark, trade name, service mark, design, logo, symbol or other copyrighted material displayed on or accessible through such sites.

      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
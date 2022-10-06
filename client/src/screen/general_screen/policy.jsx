import React, { useState } from 'react';

import styles from './Policy.module.css'
//import nav bar
import NavBar from "../../component/UserNav"
import GetStarted from "../../component/getStarted"

import Footer from "../../component/Footer"
import Modal from "../../component/Modal/DownloadModal"
//import routers

//let { admin} = useSelector(state => state.userAuth)
function Policy() {

    let [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        setShowModal(false)
    }
    const navigateToApp = () => {
        setShowModal(true)

    }




    return (<>
        {showModal && <Modal showModal={showModal} closeModal={closeModal} content={"continue on the mobile app"} />}
        <NavBar navigateToApp={navigateToApp} />
        <div className={styles.content}>
            <div className={styles.innerContent}>
                <h1 className={styles.legalHeading}>Legal</h1>
                <h1 className={styles.privacyHeading}>Coinbase Global Privacy Policy</h1>
                <p className={styles.date}>Last updated: August 29, 2022</p>
                <div className={styles.line}>

                </div>

                <p className={styles.paragraph}>
                    We at Coinbase (defined below) respect and protect the privacy of visitors to our websites and our customers. This Privacy Policy describes our information handling practices when you access our services,when you use the Coinbase mobile app, the Coinbase Card App (as defined below), any Coinbase, Coinbase Exchange, Coinbase Prime, or Coinbase Custody API or third party applications relying on such an API, and related services (referred to collectively hereinafter as "Services").

                </p>
                <p className={styles.paragraph}>
                    Please take a moment to read this Privacy Policy carefully. If you have any questions about this Policy, please submit your request via our Support Portal at .
                </p>
                <p className={styles.paragraph}>
                    We may modify this Privacy Policy from time to time which will be indicated by changing the date at the top of this page. If we make any material changes, we will notify you by email (sent to the email address specified in your account), by means of a notice on our Services prior to the change becoming effective, or as otherwise required by law.
                </p>

                <h2 className={styles.numbered_heading}>
                    1. ACCEPTANCE OF THIS PRIVACY POLICY
                </h2>

                <p className={styles.paragraph}>
                    By accessing and using our Services, you signify acceptance to the terms of this Privacy Policy. Where we require your consent to process your personal information, we will ask for your consent to the collection, use, and disclosure of your personal information as described further below. We may provide additional "just-in-time" disclosures or information about the data processing practices of specific Services. These notices may supplement or clarify our privacy practices or may provide you with additional choices about how we process your data.

                </p>
                <p className={styles.paragraph}>
                    If you do not agree with or you are not comfortable with any aspect of this Privacy Policy, you should immediately discontinue access or use of our Services.
                </p>


                <h2 className={styles.numbered_heading}>
                    2. OUR RELATIONSHIP TO YOU
                </h2>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th> Where You Reside</th>
                            <th>Services Provided</th>
                            <th>Your Operating Entity</th>
                            <th>Contact Address</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td> Anywhere but the United States and Japan</td>
                            <td>Custodial services</td>
                            <td>Coinbase Custody International Limited (unless otherwise indicated in your service contract) Company No: 657718</td>
                            <td>70 Sir John Rogerson's Quay Dublin 2, Ireland</td>
                        </tr>
                        <tr>
                            <td> EU and the United Kingdom</td>

                            <td>Digital Currency services</td>

                            <td>Coinbase Europe, Limited. Company No: 675475</td>

                            <td> 70 Sir John Rogerson's Quay Dublin 2, Ireland</td>
                        </tr>
                        <tr>
                            <td> Germany</td>

                            <td>Digital Currency services</td>

                            <td>Coinbase Germany GmbH. Company No: HRB 213709 B. BaFin-ID 10158674</td>

                            <td> Kurfürstendamm 22, 10719 Berlin, Germany</td>
                        </tr>
                        <tr>
                            <td> European Economic Area</td>

                            <td>Fiat Wallet services</td>

                            <td>Coinbase Ireland, Limited. Company No: 630350 CBI Register No: C188493</td>

                            <td> 70 Sir John Rogerson's Quay Dublin 2, Ireland</td>
                        </tr>


                        <tr>
                            <td> Singapore</td>

                            <td>Digital Currency services, Fiat Wallet services</td>

                            <td>Coinbase Singapore Pte. Ltd. Unique Entity No.: 201935002N</td>

                            <td> One Marina Boulevard, #28-00, Singapore 018989</td>
                        </tr>

                        <tr>
                            <td> Japan</td>

                            <td>Digital Currency services, Fiat Wallet services, Custodial services</td>

                            <td>Coinbase KK. Company No: 0100-01-173138 FSA Register No: Kanto Finance Bureau Directory-General No. 00028</td>

                            <td> Otemachi Building 4F FINOLAB, 1-6-1 Otemachi, Chiyoda-ku, Tokyo</td>
                        </tr>


                        <tr>
                            <td> Anywhere but the EU, US, UK, Singapore and Japan</td>

                            <td>Digital Currency Services</td>

                            <td>Coinbase Ascending Markets Kenya Limited (“CB Kenya”)</td>

                            <td> P.O. Box 10643, G.P.O. Nairobi, Kenya</td>
                        </tr>
                        <tr>
                            <td> United Kingdom (and select non-EEA countries in Europe)</td>

                            <td>Fiat Wallet services</td>

                            <td>CB Payments. Ltd Company No: 09708629 FCA Register No: 900635</td>

                            <td> 5 Fleet Place, London, EC4M 7RD, United Kingdom</td>
                        </tr>
                        <tr>
                            <td>United States</td>

                            <td>Digital Currency services, Fiat Wallet services</td>

                            <td>Coinbase, Inc. CA Entity No.: C3548456</td>

                            <td>Coinbase, Inc. c/o C T Corporation System 818 West Seventh St., Ste. 930 Los Angeles, California 90017</td>
                        </tr>


                        <tr>
                            <td>United States</td>

                            <td>Custodial services</td>

                            <td>Coinbase Custody Trust Company, LLC (unless otherwise indicated in your service contract) NYS License # 122506</td>

                            <td>Coinbase Custody Trust Company, LLC c/o C T Corporation System 28 Liberty Street New York, New York 10005</td>
                        </tr>

                        <tr>
                            <td>United States</td>

                            <td>Credit and Lending services, Margin Trading services</td>

                            <td>Coinbase Credit, Inc. CA Entity No.: C4315976</td>

                            <td>Coinbase Credit, Inc. c/o C T Corporation System 818 West Seventh St., Ste. 930 Los Angeles, California 90017</td>
                        </tr>

                        <tr>
                            <td>Australia</td>

                            <td>Digital Currency services, Fiat Wallet services</td>

                            <td>Coinbase Australia Pty Ltd; ACN 654 922 442</td>

                            <td>Coinbase Australia c/o TMF Corporate Services (Aust) Pty Limited, Suite 1 Level 11, 66 Goulburn Street, Sydney NSW 2000 Australia</td>
                        </tr>

                    </tbody>

                </table>

                <p className={styles.paragraph}>
                    The CB operating entity you contract with determines the means and purposes of processing your personal information in relation to the Services provided to you (typically referred to as a “data controller”).
                </p>
                <p className={styles.paragraph}>
                    You may be asked to provide personal information anytime you are in contact with any CB companies. The CB companies may share your personal information with each other and use it consistent with this Privacy Policy. They may also combine it with other information to provide and improve our products, services, and content (additional details below). For example, even if you do not reside in the United States (the “US”), your information may be shared with Coinbase, Inc. which provides global support for all Services including technical infrastructure, product development, security, compliance, fraud prevention, and customer support..
                </p>
                <p className={styles.paragraph}>
                    If you have any questions about your CB Account, your personal information, or this Privacy Policy, please submit your request via our Support Portal.
                </p>

                <h2 className={styles.numbered_heading}>
                    3.  THE PERSONAL INFORMATION WE COLLECT
                </h2>

                <p className={styles.paragraph}>
                    Personal information is typically data that identifies an individual or relates to an identifiable individual. This includes information you provide to us, information which is collected about you automatically, and information we obtain from third parties. The definition of personal information depends on the applicable law based on your physical location. Only the definition that applies to your physical location will apply to you under this Privacy Policy.

                </p>
                <p className={styles.paragraph}>
                    Information you provide to us. To establish an account and access our Services, we'll ask you to provide us with some important information about yourself. This information is either required by law (e.g. to verify your identity), necessary to provide the requested services (e.g. you will need to provide your bank account number if you'd like to link that account to CB), or is relevant for certain specified purposes, described in greater detail below. As we add new features and Services, you may be asked to provide additional information.
                </p>
                <p className={styles.paragraph}>
                    If you choose not to share certain information with us, we may not be able to serve you as effectively or offer you our Services. Any information you provide to us that is not required is voluntary.
                </p>
                <p className={styles.paragraph}>We may collect the following types of information from you:</p>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>
                    <p className={styles.paragraph}>Personal Identification Information: Full name, date of birth, nationality, gender, signature, utility bills, photographs, phone number, home address, and/or email.</p>

                </div>
                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>
                    <p className={styles.paragraph}>Formal Identification Information: Government issued identity document such as Passport, Driver's License, National Identity Card, State ID Card, Tax ID number, passport number, driver's license details, national identity card details, visa information, and/or any other information deemed necessary to comply with our legal obligations under financial or anti-money laundering laws.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>
                    <p className={styles.paragraph}>Institutional Information: Employer Identification number (or comparable number issued by a government), proof of legal formation (e.g. Articles of Incorporation), personal identification information for all material beneficial owners.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Financial Information: Bank account information, payment card primary account number (PAN), transaction history, trading data, and/or tax identification.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Transaction Information: Information about the transactions you make on our Services, such as the name of the recipient, your name, the amount, and/or timestamp.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Employment Information: Office location, job title, and/or description of role.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Correspondence: Survey responses, information provided to our support team or user research team.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Audio, electronic, visual and similar information, such as call and video recordings.</p>

                </div>

                <p className={styles.paragraph}>
                    Information we collect from you automatically. To the extent permitted under the applicable law, we may collect certain types of information automatically, such as whenever you interact with the Sites or use the Services. This information helps us address customer support issues, improve the performance of our Sites and Services, provide you with a streamlined and personalized experience, and protect your account from fraud by detecting unauthorized access. Information collected automatically includes:
                </p>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Online Identifiers: Geo location/tracking details, browser fingerprint, operating system, browser name and version, and/or personal IP addresses.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Usage Data: Authentication data, security questions, click-stream data, public social networking posts, and other data collected via cookies and similar technologies. Please read our Cookie Policy for more information.</p>

                </div>

                <p className={styles.paragraph}>
                    For example, we may automatically receive and record the following information on our server logs:
                </p>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>How you came to and use the Services;</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Device type and unique device identification numbers;</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Device event information (such as crashes, system activity and hardware settings, browser type, browser language, the date and time of your request and referral URL);</p>

                </div>


                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>How your device interacts with our Sites and Services, including pages accessed and links clicked;</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Broad geographic location (e.g. country or city-level location); and</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Other technical data collected through cookies, pixel tags and other similar technologies that uniquely identify your browser.</p>

                </div>


                <p className={styles.paragraph}>We may also use identifiers to recognize you when you access our Sites via an external link, such as a link appearing on a third party site.</p>


                <p className={styles.paragraph}>Information we collect from our affiliates and third parties. From time to time, we may obtain information about you from our affiliates or third party sources as required or permitted by applicable law. These sources may include:</p>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>
                        Our Coinbase Family of Companies: Our “family of companies” is the group of companies related to us by common control or ownership (“Affiliates”). In accordance with applicable law, we may obtain information about you from our Affiliates as a normal part of conducting business, if you link your various Coinbase accounts (e.g., Coinbase Wallet account or Coinbase Commerce account in order to convert cryptocurrency into fiat and make withdrawals into your bank account), so that we may offer our Affiliates’ Services to you.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Blockchain Data: We may analyze public blockchain data to ensure parties utilizing our Services are not engaged in illegal or prohibited activity under our Terms, and to analyze transaction trends for research and development purposes.
                    </p>

                </div>


                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Blockchain Data: We may analyze public blockchain data to ensure parties utilizing our Services are not engaged in illegal or prohibited activity under our Terms, and to analyze transaction trends for research and development purposes.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Joint Marketing Partners & Resellers: For example, unless prohibited by applicable law, joint marketing partners or resellers may share information about you with us so that we can better understand which of our Services may be of interest to you.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Advertising Networks & Analytics Providers: We work with these providers to provide us with de-identified information about how you found our Sites and how you interact with the Sites and Services. This information may be collected prior to account creation. For more information on how you can manage collection of this data, please see our Cookie Policy.
                    </p>

                </div>

                <h2 className={styles.numbered_heading}>
                    4. ANONYMIZED AND AGGREGATED DATA
                </h2>

                <p className={styles.paragraph}>Anonymization is a data processing technique that modifies personal information so that it cannot be associated with a specific individual. Except for this section, none of the other provisions of this Privacy Policy applies to anonymized or aggregated customer data (i.e. information about our customers that we combine together so that it no longer identifies or references an individual customer).
                </p>

                <p className={styles.paragraph}>Coinbase may use anonymized or aggregate customer data for any business purpose, including to better understand customer needs and behaviors, improve our Services, conduct business intelligence and marketing, and detect security threats. We may perform our own analytics on anonymized data or enable analytics provided by third parties.
                </p>

                <p className={styles.paragraph}>Types of data we may anonymize include, transaction data, click-stream data, performance metrics, and fraud indicators.</p>


                <h2 className={styles.numbered_heading}>
                    5. HOW YOUR PERSONAL INFORMATION IS USED
                </h2>


                <p className={styles.paragraph}>
                    Our primary purpose in collecting personal information is to provide you with a secure, smooth, efficient, and customized experience. We generally use personal information to create, develop, operate, deliver, and improve our Services, content and advertising; and for loss prevention and anti-fraud purposes. We may use this information in the following ways:
                </p>

                <p className={styles.paragraph}>(1) To maintain legal and regulatory compliance</p>

                <p className={styles.paragraph}>Most of our core Services are subject to laws and regulations requiring us to collect, use, and store your personal information in certain ways. For example, CB must identify and verify customers using our Services in order to comply with anti-money laundering laws across jurisdictions. This includes collection and storage of your photo identification. In addition, we use third parties to verify your identity by comparing the personal information you provide against third-party databases and public records. When you seek to link a bank account to your CB Account, we may require you to provide additional information which we may use in collaboration with service providers acting on our behalf to verify your identity or address, and/or to manage risk as required under applicable law. If you do not provide personal information required by law, we will have to close your account.</p>

                <p className={styles.paragraph}>(2) To enforce our terms in our user agreement and other agreements</p>

                <p className={styles.paragraph}>

                    CB handles sensitive information, such as your identification and financial data, so it is very important for us and our customers that we actively monitor, investigate, prevent, and mitigate any potentially prohibited or illegal activities, enforce our agreements with third parties, and/or prevent and detect violations of our posted user agreement or agreements for other Services. In addition, we may need to collect fees based on your use of our Services. We collect information about your account usage and closely monitor your interactions with our Services. We may use any of your personal information collected for these purposes. The consequences of not processing your personal information for such purposes is the termination of your account.
                </p>

                <p className={styles.paragraph}>(3) To detect and prevent fraud and/or funds loss</p>
                <p className={styles.paragraph}>We process your personal information in order to help detect, prevent, and mitigate fraud and abuse of our services and to protect you against account compromise or funds loss.</p>

                <p className={styles.paragraph}>(4) To provide Coinbase's Services</p>

                <p className={styles.paragraph}>
                    We process your personal information to provide the Services to you. For example, when you want to store funds on our platform, we require certain information such as your identification, contact information, and payment information. We cannot provide you with Services without such information. Third parties such as identity verification services may also access and/or collect your personal information when providing identity verification and/or fraud prevention services.
                </p>

                <p className={styles.paragraph}>
                    (5) To provide Service communications
                </p>

                <p className={styles.paragraph}>
                    We send administrative or account-related information to you to keep you updated about our Services, inform you of relevant security issues or updates, or provide other transaction-related information. Without such communications, you may not be aware of important developments relating to your account that may affect how you can use our Services. You may not opt-out of receiving critical service communications, such as emails or mobile notifications sent for legal or security purposes.
                </p>

                <p className={styles.paragraph}>
                    (6) To provide customer service
                </p>

                <p className={styles.paragraph}>
                    We process your personal information when you contact us to resolve any questions, disputes, collect fees, or to troubleshoot problems. Without processing your personal information for such purposes, we cannot respond to your requests and ensure your uninterrupted use of the Services.
                </p>
                <p className={styles.paragraph}>
                    (7) To ensure quality control

                </p>
                <p className={styles.paragraph}>
                    We process your personal information for quality control and staff training to make sure we continue to provide you with accurate information. If we do not process personal information for quality control purposes, you may experience issues on the Services such as inaccurate transaction records or other interruptions.
                </p>

                <p className={styles.paragraph}>
                    (8) To ensure network and information security

                </p>

                <p className={styles.paragraph}>
                    We process your personal information in order to enhance security, monitor and verify identity or service access, combat spam or other malware or security risks and to comply with applicable security laws and regulations. The threat landscape on the internet is constantly evolving, which makes it more important than ever that we have accurate and up-to-date information about your use of our Services. Without processing your personal information, we may not be able to ensure the security of our Services.

                </p>
                <p className={styles.paragraph}>
                    (9) For research and development purposes

                </p>
                <p className={styles.paragraph}>
                    We process your personal information to better understand the way you use and interact with Coinbase's Services. In addition, we use such information to customize, measure, and improve Coinbase's Services and the content and layout of our website and applications, and to develop new services. Without such processing, we cannot ensure your continued enjoyment of our Services.
                </p>


                <p className={styles.paragraph}>
                    (10) To enhance your experience

                </p>
                <p className={styles.paragraph}>
                    We process your personal information to provide a personalized experience, and implement the preferences you request. For example, you may choose to provide us with access to certain personal information stored by third parties. Without such processing, we may not be able to ensure your continued enjoyment of part or all of our Services.


                </p>

                <p className={styles.paragraph}>
                    (11) To facilitate corporate acquisitions, mergers, or transactions

                </p>

                <p className={styles.paragraph}>
                    We may process any information regarding your account and use of our Services as is necessary in the context of corporate acquisitions, mergers, or other corporate transactions.

                </p>

                <p className={styles.paragraph}>
                    (12) To engage in marketing activities

                </p>

                <p className={styles.paragraph}>
                    Based on your communication preferences, we may send you marketing communications (e.g. emails or mobile notifications) to inform you about our events or our partner events; to deliver targeted marketing; and to provide you with promotional offers. Our marketing will be conducted in accordance with your advertising marketing preferences and as permitted by applicable law.
                </p>

                <p className={styles.paragraph}>
                    (13) To protect the health and safety of our employees and visitors, our facilities and our property and other rights. If you visit one of our locations, to maintain security at such locations you may be photographed or videotaped.

                </p>

                <p className={styles.paragraph}>
                    (14) For any purpose that you provide your consent.

                </p>
                <p className={styles.paragraph}>
                    We will not use your personal information for purposes other than those purposes we have disclosed to you, without your permission. From time to time, and as required under the applicable law, we may request your permission to allow us to share your personal information with third parties. In such instances, you may opt out of having your personal information shared with third parties, or allowing us to use your personal information for any purpose that is incompatible with the purposes for which we originally collected it or subsequently obtained your authorization. If you choose to limit the use of your personal information, certain features or CB Services may not be available to you.

                </p>


                <h2 className={styles.numbered_heading}>
                    6. LEGAL BASES FOR PROCESSING YOUR INFORMATION
                </h2>







                <p className={styles.paragraph}>
                    For individuals who are located in the European Economic Area, the United Kingdom or Switzerland (collectively “EEA Residents'') at the time their personal information is collected, our legal bases for processing your information under the EU General Data Protection Regulation (“GDPR”) will depend on the personal information at issue, the specific context in the which the personal information is collected and the purposes for which it is used. We generally only process your data where we are legally required to, where processing is necessary to perform any contracts we entered with you (or to take steps at your request prior to entering into a contract with you), where processing is in our legitimate interests to operate our business and not overridden by your data protection interests or fundamental rights and freedoms, or where we have obtained your consent to do so. In some rare instances, we may need to process your personal information to protect your vital interests or those of another person. Below is a list of how CB uses your personal information, as described above in Section 5, with the corresponding legal bases for processing. If you have questions about or need further information concerning the legal basis on which we collect and use your personal information, please contact us using the contact details provided under the "How to contact us" heading below.

                </p>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>
                                Section & Purpose of Processing</th>
                            <th>Legal Bases for Processing</th>

                        </tr>

                    </thead>

                    <tbody>
                        <tr>
                            <td> (2) To enforce our terms in our user agreement and other agreements (4) To provide Coinbase's Services (5) To provide Service communications (6) To provide customer service (7) To ensure quality control</td>
                            <td>Based on our contract with you or to take steps at your request prior to entering into a contract.</td>

                        </tr>

                        <tr>
                            <td>(9) For research and development purposes (10) To enhance your experience (11) To facilitate corporate acquisitions, mergers, or transactions (12) To engage in direct marketing activities</td>

                            <td>Based on our legitimate interests. When we process your personal data for our legitimate interests we always ensure that we consider and balance any potential impact on you and your rights under data protection laws.</td>

                        </tr>

                        <tr>
                            <td>(1) To maintain legal and regulatory compliance (3) To detect and prevent fraud and/or funds loss (8) To ensure network and information security (13) To protect your or our’s vital interests</td>

                            <td>Based on our legal obligations, the public interest, or in your vital interests.</td>

                        </tr>

                        <tr>
                            <td>(10) To enhance your experience (12) To engage in third party marketing activities (14) For any purpose to which you consent</td>

                            <td>Based on your consent.</td>

                        </tr>



                    </tbody>

                </table>

                <h2 className={styles.numbered_heading}>
                    7. WHY WE SHARE PERSONAL INFORMATION WITH OTHER PARTIES
                </h2>

                <p className={styles.paragraph}>
                    We take care to allow your personal information to be accessed only by those who require access to perform their tasks and duties, and to share only with third parties who have a legitimate purpose for accessing it. CB will never sell or rent your personal information to third parties without your explicit consent. We will only share your information in the following circumstances:

                </p>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>With third party identity verification services in order to prevent fraud. This allows CB to confirm your identity by comparing the information you provide us to public records and other third party databases. These service providers may create derivative data based on your personal information that can be used in connection with the provision of identity verification and fraud prevention services. For example:
                    </p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>We may use Jumio Corporation or Jumio UK, Limited (collectively “Jumio”) to verify your identity by determining whether a selfie you take matches the photo in your government issued identity document.</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>For Germany users, we may use SolarisBank AG (“Solarisbank”) to verify your identity through verification of identifiable personal information. The information collected from you may include biometric data. Solarisbank’s Privacy Policy, available at https://www.solarisbank.com/en/privacy-policy/, describes its collection and use of personal information. </p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>We may use Sift Science, Inc. (“Sift”) to detect and prevent fraudulent activity on your account in real time. </p>



                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>With financial institutions with which we partner to process payments you have authorized.</p>

                </div>



                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>With service providers under contract who help with parts of our business operations. Our contracts require these service providers to only use your information in connection with the services they perform for us, and prohibit them from selling your information to anyone else. Examples of the types of service providers we may share personal information with (other than those mentioned above) include:
                    </p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Network infrastructure</p>

                </div>


                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Cloud storage</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Payment processing</p>

                </div>
                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Transaction monitoring</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Security</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Document repository services</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Document repository services</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Customer support</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Internet (e.g. ISPs)</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Data analytics</p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Marketing</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>With companies or other entities that we plan to merge with or be acquired by. You will receive prior notice of any change in applicable policies.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>With companies or other entities that purchase CB assets pursuant to a court-approved sale or where we are required to share your information pursuant to insolvency law in any applicable jurisdiction.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>With our professional advisors who provide banking, legal, compliance, insurance, accounting, or other consulting services in order to complete third party financial, technical, compliance and legal audits of our operations or otherwise comply with our legal obligations.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>With law enforcement, officials, or other third parties when we are compelled to do so by a subpoena, court order, or similar legal procedure, or when we believe in good faith that the disclosure of personal information is necessary to prevent physical harm or financial loss, to report suspected illegal activity, or to investigate violations of our User Agreement or any other applicable policies.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>We share personal information about you with our Affiliates as a normal part of conducting business and offering Services to you.
                    </p>

                </div>

                <p className={styles.paragraph}>
                    Where we believe it is necessary in order to protect the vital interests of any person. If you establish a CB Account indirectly on a third party website or via a third party application, any information that you enter on that website or application (and not directly on a CB website) will be shared with the owner of the third party website or application and your information will be subject to their privacy policies. For more information see the “Third-Party Sites and Services” section below.

                </p>




                <h2 className={styles.numbered_heading}>
                    9. HOW WE PROTECT AND STORE PERSONAL INFORMATION
                </h2>

                <p className={styles.paragraph}>

                    We understand how important your privacy is, which is why CB maintains (and contractually requires third parties it shares your information with to maintain) appropriate physical, technical and administrative safeguards to protect the security and confidentiality of the personal information you entrust to us.

                </p>
                <p className={styles.paragraph}>
                    We may store and process all or part of your personal and transactional information, including certain payment information, such as your encrypted bank account and/or routing numbers, in the US and elsewhere in the world where our facilities or our service providers are located. We protect your personal information by maintaining physical, electronic, and procedural safeguards in compliance with the applicable laws and regulations.

                </p>
                <p className={styles.paragraph}>
                    For example, we use computer safeguards such as firewalls and data encryption, we enforce physical access controls to our buildings and files, and we authorize access to personal information only for those employees who require it to fulfill their job responsibilities. Full credit card data is securely transferred and hosted off-site by payment vendors like Worldpay, (UK) Limited, Worldpay Limited, or Worldpay AP Limited (collectively “Worldpay”) in compliance with Payment Card Industry Data Security Standards (PCI DSS). This information is not accessible to CB or Coinbase staff.

                </p>

                <p className={styles.paragraph}>
                    However, we cannot guarantee that loss, misuse, unauthorized acquisition, or alteration of your data will not occur. Please recognize that you play a vital role in protecting your own personal information. When registering with our Services, it is important to choose a password of sufficient length and complexity, to not reveal this password to any third-parties, and to immediately notify us if you become aware of any unauthorized access to or use of your account.

                </p>

                <p className={styles.paragraph}>
                    Furthermore, we cannot ensure or warrant the security or confidentiality of information you transmit to us or receive from us by Internet or wireless connection, including email, phone, or SMS, since we have no way of protecting that information once it leaves and until it reaches us. If you have reason to believe that your data is no longer secure, please contact us using the contact information provided in the “How to contact us” section below.

                </p>

                <h2 className={styles.numbered_heading}>
                    10. RETENTION OF PERSONAL INFORMATION
                </h2>

                <p className={styles.paragraph}>

                    We store your personal information securely throughout the life of your CB Account. We will only retain your personal information for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting obligations or to resolve disputes. While retention requirements vary by jurisdiction, information about our typical retention periods for different aspects of your personal information are described below.

                </p>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Personal information collected to comply with our legal obligations under financial or anti-money laundering laws may be retained after account closure for as long as required under such laws.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Contact Information such as your name, email address and telephone number for marketing purposes is retained on an ongoing basis until you unsubscribe. Thereafter we will add your details to our suppression list to ensure we do not inadvertently market to you.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Content that you post on our website such as support desk comments, photographs, videos, blog posts, and other content may be kept after you close your account for audit and crime prevention purposes (e.g. to prevent a known fraudulent actor from opening a new account).
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Recording of our telephone calls with you may be kept for a period of up to six years.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Information collected via technical means such as cookies, webpage counters and other analytics tools is kept for a period of up to one year from expiry of the cookie.
                    </p>

                </div>

                <h2 className={styles.numbered_heading}>
                    11. THIRD-PARTY SITES AND SERVICES
                </h2>




                <p className={styles.paragraph}>
                    If you authorize one or more third-party applications to access your CB Services, then information you have provided to CB may be shared with those third parties. A connection you authorize or enable between your CB account and a non-CB account, payment instrument, or platform is considered an “account connection.” Unless you provide further permissions, Coinbase will not authorize these third parties to use this information for any purpose other than to facilitate your transactions using CB Services. Please note that third parties you interact with may have their own privacy policies, and CB is not responsible for their operations or their use of data they collect. Information collected by third parties, which may include such things as contact details, financial information, or location data, is governed by their privacy practices and Coinbase is not responsible for unauthorized third-party conduct. We encourage you to learn about the privacy practices of those third parties.

                </p>
                <p className={styles.paragraph}>
                    Examples of account connections include:

                </p>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Merchants: If you use your CB account to conduct a transaction with a third party merchant, the merchant may provide data about you and your transaction to us.
                    </p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Your Financial Services Providers: For example, if you send us funds from your bank account, your bank will provide us with identifying information in addition to information about your account in order to complete the transaction.
                    </p>

                </div>


                <p className={styles.paragraph}>
                    Information that we share with a third party based on an account connection will be used and disclosed in accordance with the third party's privacy practices. Please review the privacy notice of any third party that will gain access to your personal information. Coinbase is not responsible for such third party conduct.

                </p>


                <h2 className={styles.numbered_heading}>
                    12. CHILDREN'S PERSONAL INFORMATION
                </h2>
                <p className={styles.paragraph}>
                    We do not knowingly request to collect personal information from any person under the age of 18. If a user submitting personal information is suspected of being younger than 18 years of age, CB will require the user to close his or her account and will not allow the user to continue using our Services. We will also take steps to delete the information as soon as possible. Please notify us if you know of any individuals under the age of 18 using our Services so we can take action to prevent access to our Services.

                </p>

                <h2 className={styles.numbered_heading}>
                    13. INTERNATIONAL TRANSFERS
                </h2>
                <p className={styles.paragraph}>
                    To facilitate our global operations, CB may transfer, store, and process your personal information within our Affiliates, third-party partners, and service providers based throughout the world, including Ireland, Germany, Singapore, Japan, the UK, the US, the Philippines, and possibly other countries. We will protect your personal information in accordance with this Privacy Policy wherever it is processed and will take appropriate contractual or other steps to protect the relevant personal information in accordance with applicable laws. We contractually obligate recipients of your personal information to agree to at least the same level of privacy safeguards as required under applicable data protection laws. By communicating electronically with CB, you acknowledge and agree to your personal information being processed in this way.

                </p>
                <p className={styles.paragraph}>
                    If you have a complaint about our privacy practices and our collection, use or disclosure of personal information please submit your request via our Support Portal.
                </p>

                <h2 className={styles.numbered_heading}>
                    Data transferred out of the EU
                </h2>

                <p className={styles.paragraph}>
                    We rely primarily on the European Commission’s Standard Contractual Clauses to facilitate the international and onward transfer of personal information collected in the European Economic Area (“EEA”), the United Kingdom and Switzerland (collectively “European Personal Information”), to the extent the recipients of the European Personal Information are located in a country that the EU considers to not provide an adequate level of data protection. This includes transfers from our EU-based CB operating entities to our US-based operating entity, Coinbase, Inc. We may also rely on an adequacy decision of the European Commission confirming an adequate level of data protection in the jurisdiction of the party receiving the information, or derogations in specific situations.
                </p>
                <p className={styles.paragraph}>
                    Coinbase, Inc. is responsible for the processing of personal information it receives and subsequently transfers to a third party acting as an agent on its behalf. Before we share your information with any third party, Coinbase, Inc. will enter into a written agreement that the third party provides at least the same level of protection for the personal information as required under applicable data protection laws.
                </p>
                <p className={styles.paragraph}>
                    Coinbase, Inc., also participates in and has certified its compliance with the EU-US Privacy Shield Framework. Under the Privacy Shield Framework, Coinbase, Inc. is subject to the authority of the Federal Trade Commission.


                </p>

                <h2 className={styles.numbered_heading}>
                    14. YOUR PRIVACY RIGHTS AND CHOICES
                </h2>

                <p className={styles.paragraph}>
                    Depending on applicable law where you reside, you may be able to assert certain rights related to your personal information identified below. If any of the rights listed below are not provided under law for your operating entity or jurisdiction, CB has absolute discretion in providing you with those rights.

                </p>

                <p className={styles.paragraph}>
                    Depending on applicable law where you reside, you may be able to assert certain rights related to your personal information identified below. If any of the rights listed below are not provided under law for your operating entity or jurisdiction, CB has absolute discretion in providing you with those rights.

                </p>
                <p className={styles.paragraph}>
                    Your rights to personal information are not absolute. Depending upon the applicable law, access to your rights under the applicable law may be denied: (a) when denial of access is required or authorized by law; (b) when granting access would have a negative impact on another's privacy; (c) to protect our rights and properties; (d) where the request is frivolous or vexatious, or for other reasons.

                </p>
                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Access and portability. You may request that we provide you a copy of your personal information held by us. This information will be provided without undue delay subject to a potential fee associated with gathering of the information (as permitted by law), unless such provision adversely affects the rights and freedoms of others. In certain circumstances, you may request to receive your personal information in a structured, commonly used and machine-readable format, and to have us transfer your personal information directly to another data controller.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Rectification of incomplete or inaccurate personal information. You may request us to rectify or update any of your personal information held by CB that is inaccurate. You may do this at any time by logging in to your account and clicking the Profile or My Account tab.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Erasure. You may request to erase your personal information, subject to applicable law. If you close your CB Account, we will mark your account in our database as "Closed," but will keep certain account information, including your request to erase, in our database for a period of time as described above. This is necessary to deter fraud, by ensuring that persons who try to commit fraud will not be able to avoid detection simply by closing their account and opening a new account, and to comply with CB's legal obligations. However, if you close your account, your personal information will not be used by us for any further purposes, nor shared with third parties, except as necessary to prevent fraud and assist law enforcement, as required by law, or in accordance with this Privacy Policy.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Withdraw consent. To the extent the processing of your personal information is based on your consent, you may withdraw your consent at any time. Your withdrawal will not affect the lawfulness of CB's processing based on consent before your withdrawal.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Restriction of processing. In some jurisdictions, applicable law may give you the right to restrict or object to us processing or transferring your personal information under certain circumstances. We may continue to process your personal information if it is necessary for the defense of legal claims, or for any other exceptions permitted by applicable law.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Automated individual decision-making, including profiling. CB relies on automated tools to help determine whether a transaction or a customer account presents a fraud or legal risk. In some jurisdictions, you have the right not to be subject to a decision based solely on automated processing of your personal information, including profiling, which produces legal or similarly significant effects on you, save for the exceptions applicable under relevant data protection laws.</p>

                </div>

                <div className={styles.bulletlist_con}>
                    <div>
                        <div className={styles.bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>Marketing communications. You can opt-out of receiving marketing communications from CB. Direct marketing includes any communications to you that are only based on advertising or promoting our products and services. We will only contact you by electronic means (email or SMS) based on our legitimate interests, as permitted by applicable law, or your consent. If you do not want us to send you marketing communications, please go to your account settings to opt-out or submit a request via our Support Portal. </p>

                </div>

                <div className={styles.small_bulletlist_con}>
                    <div>
                        <div className={styles.small_bullet}>

                        </div>

                    </div>

                    <p className={styles.paragraph}>For users in the European Economic Area, the United Kingdom and Switzerland: To the extent we can rely on legitimate interest under the applicable law, we will only send you information about our Services that are similar to those which were the subject of a previous sale or negotiations of a sale to you. We will contact you by electronic means for marketing purposes only if you have consented to such communication. You may raise such objections with regard to initial or further processing for purposes of direct marketing, at any time and free of charge. </p>



                </div>

                <h2 className={styles.numbered_heading}>
                    16. HOW TO CONTACT US
                </h2>
                <p className={styles.paragraph}>
                    If you have questions or concerns regarding this Privacy Policy, or if you have a complaint, please contact us on our Support page, at dpo@coinbase.com, or by writing to us at the address of your operating entity (provided above).

                </p>






















            </div>

        </div>


        <Footer />

























    </>

    );
}

export default Policy;
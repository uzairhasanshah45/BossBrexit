import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Benifits = (props) => {

    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/brexit.jpg')}>
            <View style={styles.mainView}>
                <SafeAreaView backgroundColor={'#023e8a'} opacity={0.95} />
                <View style={styles.otherHeader}>
                    <TouchableOpacity style={{ position: 'absolute', left: 15 }} onPress={() => props.navigation.goBack()}>
                        <BackIcon name="arrow-back" size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.headrtxt}>Benefits</Text>
                </View>
                <View style={styles.otherMainView}>
                    <Text style={styles.mainHeading}>BENEFITS TO BREXIT</Text>
                </View>


                <ScrollView style={{ marginTop: 20 }}>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Britain’s exit from the EU’s single market is expected to cause significant disruption and cost. Yet the upheaval is also supposed to yield opportunity.{'\n\n'}The case for Brexit, which convinced a majority of voters in the 2016 referendum and helped Prime Minister Boris Johnson win power, leant heavily on the purported long-term benefits of being outside the now 27-member EU. They range from new regulatory freedoms, an independent trade policy and a stricter immigration system to reinvent the labour force.{'\n\n'}There’s been plenty of gloom since then, not least because the coronavirus pandemic has already sent the economy into a tailspin. Even ardent Brexit-supporting economists acknowledge the likely pain before any gain as businesses struggle to get to grips with how to export to a continent they’ve had largely unencumbered access to for decades. {'\n\n'}As Britain and the EU try to thrash out a trade deal by the year-end, here’s some of the potential opportunities for businesses — from fishing companies to airlines and insurers.</Text>
                    </View>
                    <Text style={styles.othersProtect}>RULES AND TAXES</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>The UK will have more power to shape its regulatory environment and cut taxes. It already has one of the lowest rates of company tax in Europe, but the country could go further. The government could also expand the “patent box”, which reduces taxes on profit from patented inventions to foster research & development. It was constrained by EU rules on state aid.{'\n\n'}“Europe is worried the UK will set up near-shore competition to the continent,” said Mark Price, former deputy chair of retailer John Lewis Partnership and a former trade minister. The right tax regime would make the UK a lot more attractive as a base to export into the EU, he said.{'\n\n'}In emerging industries, such as genetically modified foods and genome technology, Britain can take a more permissive approach than the EU, according to Julian Jessop, former chief economist and now a fellow at the Institute of Economic Affairs in London. He noted data protection and regulation of the internet as other areas where the UK would be able to diverge.{'\n\n'}In aviation, Britain would have the ability to cut air passenger duty on the return leg of domestic flights, which is at present prevented by a European Commission ruling. Reducing the levy has long been a demand of airlines, which say it would mean cheaper flights.</Text>
                    </View>
                    <Text style={styles.othersProtect}>FINANCIAL SERVICES</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Insurers may soon fall outside European rules known as Solvency II if a government review started earlier in October is implemented. Companies such as Aviva and Legal & General would benefit from potential changes permitting them to invest in a broader range of assets while allowing them to take more risk, according to Steven Findlay, head of prudential regulation for the Association of British Insurers.{'\n\n'}Brexit could also boost the market for initial public offerings by removing the €8m EU ceiling on the amount companies can raise from individual investors without having to issue a prospectus, said Andrew Chapman, head of investment banking at Peel Hunt. “The UK government could look to raise that threshold so that we have a much more liquid and free-moving market,” he said.{'\n\n'}Outside the EU’s customs union, the UK can sign its own trade agreements. Its biggest deal to date is an accord with Japan. While Britain already benefited from a pact with Japan through EU membership, it says the new agreement is superior in areas such as financial services and data.{'\n\n'}Fintech firms such as TransferWise and Revolut will no longer be restricted by data localisation rules, meaning they could expand operations into Japan without needing to build servers in the country. The trade pact will help TransferWise “support Japanese customers with cheaper, faster and more convenient services”, said Venkatesh Saha, the company’s head of expansion for Asia-Pacific.</Text>
                    </View>
                    <Text style={styles.othersProtect}>FISHING</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>The UK will control its fishing waters post-Brexit and British fishing firms will be able to expand their catch. Though it accounts for only 0.12% of Britain’s economy and employs 24,000 people, the industry is symbolic after membership of Europe’s single market precipitated its demise.{'\n\n'}For a sense of how Britain could make the most of its fishing gains, Iceland provides a model. Fish and associated industries make up 6% of the Nordic country’s GDP, with fish leftovers being used in pharmaceutical and beauty products while fish skin is used to treat injuries.</Text>
                    </View>
                    <Text style={styles.othersProtect}>FOOD AND FOOTWEAR</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>A trade agreement with the US could cut tariffs on products such as Scotch whisky, cars and ceramics, and also create more opportunities for exporting services, which make up 80% of Britain’s economy. It could also lead to greater variety and cheaper food by opening up the domestic market to US agricultural products. {'\n\n'}The UK could choose to drop World Trade Organisation tariffs on products that are currently taxed to protect the interests of EU countries. Citrus fruit, wine, footwear and clothing would be candidates.{'\n\n'}“There are so many products where we currently pay import duties to protect industries in other parts of Europe,” said Simon Wolfson, CEO of retailer Next. “There is very little point having tariffs on these.”</Text>
                    </View>
                    <Text style={styles.othersProtect}>DOMESTIC INDUSTRY</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Extra costs when trading with the EU will encourage UK manufacturers to source more of their inputs locally, said Andrew Underwood, a Brexit supply chain and procurement consultant at KPMG. That will particularly apply to just-in-time manufacturing, he said.{'\n\n'}“It’s clearly something organisations are starting to think more about because of the potential impact of delays,” he said. “They can’t afford to wait.”{'\n\n'}To help develop domestic production, the UK will be able to set its own state-aid rules, meaning it could expand the amount of financial support it gives to promote specific industries. Increasing government intervention in the economy could also help Johnson fulfil his goal of rejuvenating poorer parts of Britain and “level up” the economy.</Text>
                    </View>
                    <Text style={styles.othersProtect}>RED TAPE</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>One industry that’s about to flourish is bureaucracy. From 2021, companies will need to comply with a wave of new red tape to move goods between the UK and EU. An extra 400-million customs declarations are expected to be required annually, at a cost of about £13bn, even if the two sides agree a trade deal.{'\n\n'}As well as customs brokers  and logistics specialists, providers of warehousing may benefit as companies stockpile goods in anticipation of border disruption — if they can find the space. The vacancy rate in Greater London is already below 3%, with low levels of availability across the southeast, Manchester, Birmingham, and Bristol because of demand for online retail sales, according to a report by Knight Frank on October 8.{'\n\n'}Regional ports also may see a boost. With the government warning of 7,000-truck-long queues towards the Channel in a reasonable worst-case scenario, goods could be rerouted through Plymouth, Hull and Grimsby.</Text>
                    </View>
                    <Text style={styles.othersProtect}>UNSHACKILING INVESTMENT</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Whatever happens, at least there will be clarity. That could prompt some companies to ditch investment plans for good. Others may revive them.{'\n\n'}“Simply getting Brexit done is going to be a positive because it will lift some of the uncertainty that’s been hanging over the economy and investment in particular,” said Jessop at the Institute of Economic Affairs. “Having independence over trade policy and regulatory policy is a good thing.”</Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default Benifits;

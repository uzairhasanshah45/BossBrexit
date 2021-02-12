import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const WhatIsBrexit = (props) => {

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
                    <Text style={styles.headrtxt}>What is Brexit</Text>
                </View>
                <View style={styles.otherMainView}>
                    <Text style={styles.mainHeading}>WHAT IS BREXIT?</Text>
                </View>


                <ScrollView style={{ marginTop: 20 }}>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>After months of negotiations, the UK and European Union finally agreed a deal that will define their future relationship, which comes into effect at 23.00GMT on 31 December.</Text>
                        <Text style={styles.mainPara}>{'\n'}BREXIT, It is an abbreviation for the term “British exit”, similar to “Grexit” that was used for many years to refer to the possibility of Greece leaving the Eurozone. Brexit refers to the possibility of Britain withdrawing from the European Union (EU). The country will hold a referendum on its EU membership on June 23.</Text>
                    </View>
                    <Text style={styles.othersProtect}>WHAT IS THE EUROPEAN UNION?</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>The European Union (EU) is a grouping of 28 countries that trade and allow their citizens to move freely between nations to work and live. Initially, it was built on the ruins of World War II to end centuries of bloodshed and to integrate economic power.</Text>
                    </View>
                    <Text style={styles.othersProtect}>WHY THE CALL FOR REFERENDUM?</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>When David Cameron became the prime minister of Britain in 2010 as head of a Conservative Liberal Democrat coalition, he had to withstand pressure about a Europe vote from the pro-exit UK Independence Party and from restive eurosceptics in his own party. Finally, in 2013 he promised an in-out referendum on EU membership if the Conservatives won the 2015 election. He secured an absolute majority in 2015 and hence the referendum.</Text>
                    </View>
                    <Text style={styles.othersProtect}>REFERENDUM: MAJORITY VOTES TO LEAVE</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>On 23 June 2016, the UK held a referendum on its membership of the EU. The question facing voters was: ‘Should the United Kingdom remain a member of the European Union or leave the European Union?’ 51.89% of voters voted to leave the EU. The UK left the EU on 31 January 2020.</Text>
                    </View>
                    <Text style={styles.othersProtect}>BREXIT REFERENDUM RESULT</Text>
                    <View style={styles.otherImageContainer}>
                        <Image source={require('../../assets/images/result.png')} style={styles.otherImage} />
                    </View>
                    <Text style={styles.othersProtect}>WHATS IN THE BREXIT DEAL</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Freedom to work and live between the UK and the EU also comes to an end, and in 2021, UK nationals will need a visa if they want to stay in the EU more than 90 days in a 180-day period.{'\n\n'}Northern Ireland will continue to follow many of the EU's rules in order to avoid a hardening of its border with the Republic of Ireland. This will mean however that new checks will be introduced on goods entering Northern Ireland from the rest of the UK.{'\n\n'}Now that it's no longer in the EU, the UK is free to set its own trade policy and can negotiate deals with other countries. Talks are being held with the US, Australia and New Zealand - countries that currently don't have free trade deals with the EU.</Text>
                    </View>
                    <Text style={styles.othersProtect}>I THOUGHT THE UK HAD ALREADY LEFT THE EU?</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>It has. The UK voted to leave the EU in 2016 and officially left the trading bloc.it's nearest and biggest trading partner - on 31 January 2020.{'\n\n'}However, both sides agreed to keep many things the same until 31 December 2020, to allow enough time to agree to the terms of a new trade deal.{'\n\n'}It was a complex, sometimes bitter negotiation, but they finally agreed a deal on 24 December. </Text>
                    </View>
                    <Text style={styles.othersProtect}>IS THIS FINALLY THE END OF HAVING TO HEAR ABOUT BREXIT?</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>Sadly, no. Decisions are still to be made on data sharing and on financial services, and the agreement on fishing only lasts five years.{'\n\n'}Also while the UK and EU have agreed to some identical rules now, they don't have to be identical in the future, and if one side takes exception to the changes, they can trigger a dispute, which could ultimately lead to tariffs (charges on imports) being imposed on some goods in the future.{'\n\n'}Expect the threat of disputes to be a new constant in UK-EU relations. </Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default WhatIsBrexit;

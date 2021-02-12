import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const KeyPoints = (props) => {

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
                    <Text style={styles.headrtxt}>Key Points</Text>
                </View>
                <View style={styles.otherMainView}>
                    <Text style={styles.mainHeading}>KEY POINTS OF THE DEAL</Text>
                </View>


                <ScrollView style={{ marginTop: 20 }}>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, { fontWeight: 'bold' }]}>The UK-EU trade agreement, which contains new rules for living, working and trading together, takes effect from 23:00 GMT on 31 December.</Text>
                    </View>
                    <Text style={styles.othersProtect}>CHANGES ON 1 JANUARY</Text>
                    <View style={styles.desc}>
                        <Text style={styles.mainPara}>The deal contains new rules for how the UK and EU will live, work and trade together.{'\n\n'}While the UK was in the EU, companies could buy and sell goods across EU borders without paying taxes and there were no limits on the amount of things which could be traded.{'\n\n'}Under the terms of the deal, that won't change on 1 January, but to be sure that neither side has an unfair advantage, both sides had to agree to some shared rules and standards on workers' rights, as well as many social and environmental regulations. You can read more detail on other aspects of the deal, including more on travel, fishing, and financial services.{'\n\n'}The full complicated agreement is more than 1,200 pages long, but here are some of the key points.</Text>
                    </View>
                    <Text style={styles.othersProtect}>TRADE</Text>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>WHAT DEAL SAYS: </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - There will be no taxes on goods (tariffs) or limits on the amount that can be traded (quotas) between the UK and the EU from 1 January.{'\n\n'}2 - Some new checks will be introduced at borders, such as safety checks and customs declarations.{'\n\n'}3 - There are some new restrictions on certain UK animal food products. For example, uncooked meats like sausages and burgers can't enter the EU unless they are frozen to -18C.</Text>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>{'\n\n'}WHAT DOES THAT MEAN? </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - Having a deal in place means that the fear that some goods could become more expensive has been avoided.{'\n\n'}2 - However, businesses will still need to prepare for new procedures at ports, and if new paperwork is incomplete, it could lead to disruption.</Text>
                    </View>
                    <Text style={styles.othersProtect}>SERVICES AND QUALIFICATIONS</Text>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>WHAT DEAL SAYS: </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - Businesses offering services, such as banking, architecture and accounting, will lose their automatic right of access to EU markets and will face some restrictions.{'\n\n'}2 - There will no longer be automatic recognition of professional qualifications for people such as doctors, chefs and architects.</Text>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>{'\n\n'}WHAT DOES THAT MEAN? </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - Rather than following one set of rules for the whole of the EU, UK businesses will need to comply with the regulations in each individual country.{'\n\n'}2 - It will be harder for people with qualifications gained in the UK to sell their services in the EU. Individuals will need to check each country's rules to make sure their qualification is still recognised.{'\n\n'}3 - However, the UK and EU have pledged to keep talking to try to improve access for the service sector in the future.</Text>
                    </View>
                    <Text style={styles.othersProtect}>TRAVEL</Text>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>WHAT DEAL SAYS: </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - UK nationals will need a visa for stays of longer than 90 days in the EU in a 180-day period.{'\n\n'}2 - EU pet passports will no longer be valid.{'\n\n'}3 - European Health Insurance Cards, (EHIC) cards will remain valid until they expire.{'\n\n'}4 - The UK is no longer subject to the ban on additional roaming charges, although both sides will encourage operators to have "transparent and reasonable rates" for roaming.</Text>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>{'\n\n'}WHAT DOES THAT MEAN? </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - The UK government says EHIC will be replaced with a new UK Global Health Insurance Card, but full details have not been released yet.{'\n\n'}2 - Pets will still be allowed in the EU, but it will be a more complicated process as owners will need to obtain an animal health certificate for each trip they make.{'\n\n'}3 - UK mobile operators will be able to charge for roaming, so people should check with their mobile phone company before travelling.</Text>
                    </View>
                    <Text style={styles.othersProtect}>FISHING</Text>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>WHAT DEAL SAYS: </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - Over the next five-and-a-half years, the UK will gradually gain a greater share of the fish from its own waters.{'\n\n'}2 - The UK could choose to ban EU fishing boats from 2026, but the EU would be allowed to introduce taxes on British fish in response.</Text>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>{'\n\n'}WHAT DOES THAT MEAN? </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - Fishing was the hardest and last issue to be resolved in the negotiation, and some UK fishermen are unhappy with the arrangement. The Scottish Fishermen's Federation, for example, says the deal does not give the UK enough control of its waters.{'\n\n'}2 - Starting in 2026, the UK and the EU will hold regular talks on fishing access. So there could be more heated arguments ahead.</Text>
                    </View>
                    <Text style={styles.othersProtect}>EUROPEAN COURT OF JUSTICE AND OTHER DISPUTES</Text>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>WHAT DEAL SAYS: </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - There will be no role in the UK for the European Court of Justice (ECJ), which is the highest court in the EU.{'\n\n'}2 - Disputes that cannot be resolved between the UK and the EU will be referred to an independent tribunal instead.</Text>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>{'\n\n'}WHAT DOES THAT MEAN? </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - Ending the role of the ECJ was a key UK demand as Brexit supporters said it would allow the UK to "take back control" of its laws.{'\n\n'}2 - The ECJ could still have a role in Northern Ireland because it continues to follow some EU trade rules.{'\n\n'}3 - If either side moves too far away from the current rules around product standards, tariffs (charges on imports) could be imposed on some goods in the future.</Text>
                    </View>
                    <Text style={styles.othersProtect}>SECURITY AND DATA</Text>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>WHAT DEAL SAYS: </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - The UK will no longer have automatic access to key security databases, but should be able to gain access upon request.{'\n\n'}2 - The UK will not be a member of the EU's law enforcement agency, Europol, but it will have a presence at its headquarters.{'\n\n'}3 - The UK is no longer obliged to comply with EU standards of data protection, but data will continue to be exchanged in the same way for at least four months as long as the UK doesn't change its data protection rules.</Text>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>{'\n\n'}WHAT DOES THAT MEAN? </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - The UK's arrangement with Europol will be similar to the one the US currently has.{'\n\n'}2 - Many of the rules about storing and processing data still need be decided.</Text>
                    </View>
                    <Text style={styles.othersProtect}>EDUCATION</Text>
                    <View style={styles.desc}>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>WHAT DEAL SAYS: </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - The UK will no longer participate in the Erasmus exchange programme, an EU scheme that helps students study in other countries.{'\n\n'}2 - Students at universities in Northern Ireland will continue to participate in Erasmus, as part of an arrangement with the Irish government.</Text>
                        <Text style={[styles.mainPara, {fontWeight: 'bold'}]}>{'\n\n'}WHAT DOES THAT MEAN? </Text>
                        <Text style={styles.mainPara}>{'\n'}1 - Students that have already started courses in the EU will continue to receive support for fees.{'\n\n'}2 -A new scheme named after the mathematician Alan Turing will begin in September 2021. The government says it will be similar to Erasmus but will include countries across the world.</Text>
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default KeyPoints;

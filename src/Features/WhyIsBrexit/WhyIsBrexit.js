import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const WhyIsBrexit = (props) => {

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
                    <Text style={styles.headrtxt}>Why is Brexit</Text>
                </View>
                <View style={styles.otherMainView}>
                    <Text style={styles.mainHeading}>WHY IS BREXIT?</Text>
                </View>
                <ScrollView style={{ marginTop: 20 }}>
                    <Text style={styles.mainPara}>A portmanteau of the words Britain and exit, Brexit caught on as shorthand for the proposal that Britain split from the European Union and change its relationship to the bloc on trade, security and migration.{'\n'}Britain has been debating the pros and cons of membership in a European community of nations almost from the moment the idea was broached. It held its first referendum on membership in what was then called the European Economic Community in 1975, less than three years after it joined. At the time, 67 percent of voters supported staying in the bloc.{'\n\n'}But that was hardly the end of the debate.{'\n\n'}In 2013, Prime Minister David Cameron promised a national referendum on European Union membership with the idea of settling the question once and for all. The options offered to voters were broad and vague — Remain or Leave — and Mr. Cameron was convinced that Remain would win handily.{'\n\n'}That turned out to be a serious miscalculation.{'\n\n'}As Britons went to the polls on June 23, 2016, a refugee crisis had made migration a subject of political rage across Europe. Meanwhile, the Leave campaign was hit with accusations that it had relied on lies and that it had broken election laws.{'\n\n'}In the end, a withdrawal from the bloc, however ill-defined, emerged with the support of 52 percent of voters.{'\n\n'}Debate settled? Hardly.{'\n\n'}Brexit advocates had saved for another day the tangled question of what should come next. Even now that Britain has settled the terms of its departure, it remains unclear what sort of relationship with the European Union it wants for the future, a matter that could prove just as divisive as the debate over withdrawal.</Text>
                    <Text style={styles.othersProtect}>WHY IS IT SUCH A BIG DEAL?</Text>
                    <Text style={styles.mainPara}>Europe is Britain’s most important export market and its biggest source of foreign investment, while membership in the bloc has helped London cement its position as a global financial center.{'\n\n'}With some regularity, major businesses have announced that they are leaving Britain because of Brexit, or have at least threatened to do so. The list of companies thinking about relocating includes Airbus, which employs 14,000 people and supports more than 100,000 other jobs.{'\n\n'}The government has projected that in 15 years, the country’s economy would be 4 percent to 9 percent smaller if Britain left the European Union than if it remained, depending on how it leaves.{'\n\n'}Mrs. May had promised that Brexit would mean an end to free movement — that is, the right of people from elsewhere in Europe to live and work in Britain. Working-class people who see immigration as a threat to their jobs viewed that as a triumph. But an end to free movement would cut both ways, and the prospect was dispiriting for young Britons hoping to study or work abroad.</Text>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}
export default WhyIsBrexit;

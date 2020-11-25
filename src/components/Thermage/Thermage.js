import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';

Font.register({
    family: 'Allura',
    src: './fonts/Allura-Regular.ttf'
})
Font.register({
    family: 'Raleway-Light',
    src: './fonts/Raleway-Light.ttf'
})
Font.register({
    family: 'Raleway-Medium',
    src: './fonts/Raleway-Medium.ttf'
})
Font.register({
    family: 'Raleway-Thin',
    src: './fonts/Raleway-Thin.ttf'
})


const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      textAlign: "center",
    },
    pageBackground: {
        position: 'absolute',
        top: "12px",
        left: "10px",
        right: "10px",
        bottom: "12px"
    },
    container: {
        width: "100%",
        marginTop: "75px",
        color: "#aba9a9",
        fontFamily: 'Raleway-Light'
    },
    logoWrapper: {
        width: "120px",
        marginTop: 0,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px"
    },
    logo: {
        width: "100%"
    },
    sep: {
        width: "50%",
        display: "block",
        marginTop: 0,
        marginLeft: "auto",
        marginRight: "auto"
    },
    title: {
        color: "#44153f",
        marginTop: "15px",
        marginBottom: "15px",
        fontFamily: "Allura",
        fontSize: 50
    },
    sep2: {
        width: "50%",
        display: "block",
        marginTop: 0,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "15px"
    },
    acknowledge: {
        marginBottom: "25px"
    },
    name: {
        textTransform: "uppercase",
        color: "#9c3f97",
        marginBottom: "25px",
        fontFamily: 'Raleway-Medium',
        fontSize: 30
    },
    date: {
        marginTop: "25px",
        color: "#9c3f97",
        // fontFamily: 'Raleway-Thin',
        fontSize: 25
    }
  });

const Thermage = ({firstName, lastName, certiDate}) => {
    return(
            <Document>
            <Page size="A4" style={styles.page} orientation="landscape">
                    <Image src="./Thermage_border.png" style={styles.pageBackground} />
                    <View style={styles.container}>
                        <View style={styles.logoWrapper}>
                            <Image src="./thermage_logo.png" style={styles.logo} />
                        </View>
                        <Image src="./thermage_sep_1.png" style={styles.sep} />
                        <Text style={styles.title}>Certificate of Attendance</Text>
                        <Image src="./thermage_sep_2.png" style={styles.sep2} />
                        <Text style={styles.acknowledge}>This acknowledges that</Text>
                        <Text style={styles.name}>{firstName}  {lastName}</Text>
                        <Text>has attended training on the application of the</Text>
                        <Text>Clear + Brillaint procedure</Text>
                        <Text>as conducted by a representative of Solta Medical on</Text>
                        <Text style={styles.date}>{certiDate}</Text>
                    </View>
            </Page>
            </Document>
    );
}

export default Thermage;
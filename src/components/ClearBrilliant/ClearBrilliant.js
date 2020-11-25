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
        marginTop: "80px",
        color: "#aba9a9",
        fontFamily: 'Raleway-Light'
    },
    logoWrapper: {
        width: "150px",
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
        color: "#005395",
        marginTop: "30px",
        marginBottom: "30px",
        fontFamily: "Allura",
        fontSize: 50
    },
    acknowledge: {
        marginBottom: "30px",
    },
    name: {
        textTransform: "uppercase",
        color: "#0080b2",
        marginBottom: "30px",
        fontFamily: 'Raleway-Medium',
        fontSize: 30
    },
    date: {
        marginTop: "25px",
        color: "#3e9ec5",
        // fontFamily: 'Raleway-Thin',
        fontSize: 25
    }
  });

const ClearBrilliant = ({firstName, lastName, certiDate}) => {
    return(
            <Document>
            <Page size="A4" style={styles.page} orientation="landscape">
                    <Image src="./CB_border.png" style={styles.pageBackground} />
                    <View style={styles.container}>
                        <View style={styles.logoWrapper}>
                            <Image src="./CB_logo.png" style={styles.logo} />
                        </View>
                        <Image src="./CB_sep.png" style={styles.sep} />
                        <Text style={styles.title}>Certificate of Attendance</Text>
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

export default ClearBrilliant;
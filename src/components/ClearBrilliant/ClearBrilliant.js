import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';


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
        marginTop: "100px",
        color: "#aba9a9",
    },
    logoWrapper: {
        width: "210px",
        marginTop: 0,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "25px"
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
    },
    acknowledge: {
        marginBottom: "30px"
    },
    name: {
        textTransform: "uppercase",
        color: "#0080b2",
        marginBottom: "30px"
    },
    date: {
        marginTop: "25px",
        color: "#3e9ec5"
    }
  });

const ClearBrilliant = ({firstName, lastName}) => {
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
                        <Text style={styles.date}>Month Year</Text>
                    </View>
            </Page>
            </Document>
    );
}

export default ClearBrilliant;
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
        marginTop: "95px",
        color: "#aba9a9",
    },
    logoWrapper: {
        width: "150px",
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
        color: "#44153f",
        marginTop: "15px",
        marginBottom: "15px",
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
        marginBottom: "30px"
    },
    name: {
        textTransform: "uppercase",
        color: "#9c3f97",
        marginBottom: "30px"
    },
    date: {
        marginTop: "25px",
        color: "#9c3f97"
    }
  });

const Thermage = ({firstName, lastName}) => {
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
                        <Text style={styles.date}>Month Year</Text>
                    </View>
            </Page>
            </Document>
    );
}

export default Thermage;
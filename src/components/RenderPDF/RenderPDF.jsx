import { useEffect, useState } from 'react';
import { Document, Page, PDFDownloadLink, StyleSheet, Text, View, PDFViewer } from '@react-pdf/renderer';
import './RenderPDF.css'
const styles = StyleSheet.create({
    page: {
        backgroundColor: "#E4E4E4",
        padding: 30,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
    },
    section: {
        display: "flex",
        flexDirection: "col",
        marginBottom: 30,
    },
    parragraph: {
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 1.5,
    },
    parragraph2: {
        fontSize: 12,
        textAlign: "justify",
        lineHeight: 1.5,
        marginBottom: 30,
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    }
});

function RenderPDF() {
    const [responses, setResponses] = useState([]);
    const [user, setUser] = useState([]);
    const [fileName, setFileName] = useState("")
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
        setResponses(savedAnswers);
    }, []);

    useEffect(() => {
        setFileName("")
        const savedUser = JSON.parse(localStorage.getItem('user')) || [];
        const file = savedUser.name + "_" + savedUser.lastname + "_test.pdf";
        setFileName(file)
        setUser(savedUser);
    }, []);

    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        setIsMobile(/android|ipad|iphone|ipod/.test(userAgent.toLowerCase()));
    }, []);

    const PDFDocument = (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.title}>Respuestas del Test</Text>
                <View style={styles.section}>
                    <Text>{user.name} {user.lastname}, Edad: {user.age}</Text>
                </View>
                {responses.map((response, index) => (
                    <View style={styles.parragraph} key={index}>
                        <Text style={styles.parragraph}>Pregunta {response.questionId}: {response.question}</Text>
                        <Text style={styles.parragraph2}>{response.answer}</Text>
                    </View>
                ))}
                <View style={styles.pageNumber}>
                    <Text render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} />
                </View>
            </Page>
        </Document>
    );

    return (
        <>
            {isMobile ? (
                <div className="pdf-container-mobile">
                    <PDFDownloadLink
                        document={PDFDocument}
                        fileName={fileName}
                        className='button_link'
                    >
                        {({ loading }) =>
                            loading ? 'Cargando documento...' : 'Descargar PDF'
                        }
                    </PDFDownloadLink>
                </div>
            ) : (
                <PDFViewer className="pdf-container container-fluid">
                    {PDFDocument}
                </PDFViewer>
            )}
        </>
    );
}

export default RenderPDF;

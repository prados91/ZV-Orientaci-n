import {
    Document,
    Text,
    Page,
    StyleSheet,
    View,
    PDFViewer,
} from "@react-pdf/renderer";
import { useState, useEffect } from 'react';

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

import './RenderPDF.css'

function RenderPDF() {

    const [responses, setResponses] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('answers')) || [];
        setResponses(savedAnswers);
    }, []);

    useEffect(() => {
        const savedUser = JSON.parse(localStorage.getItem('user')) || [];
        setUser(savedUser);
    }, []);
    return (
        <PDFViewer className="pdf-container container-fluid">
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
        </PDFViewer>
    );
}

export default RenderPDF;
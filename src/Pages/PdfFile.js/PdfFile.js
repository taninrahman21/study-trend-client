import React from 'react';
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 15,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  }
})

const PdfFile = ({course}) => {
  const { name, classTime, description, price, author } = course;

  return (
    <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed></Text>
      <Text style={styles.title}>Course: {name}</Text>
      <Text style={styles.title}>Price: ${price}</Text>
      <Text style={styles.title}>Class Time: {classTime}</Text>
      <Text style={styles.title}>Instructor: {author.name}, {author.proffesion}</Text>
      <Text style={styles.text}>About {name}: {description}</Text>

      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) =>
          `${pageNumber} / ${totalPages}`
        }
      />
    </Page>
  </Document>
  );
};

export default PdfFile;
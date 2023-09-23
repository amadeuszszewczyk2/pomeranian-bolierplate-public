import React, { useState } from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  pdf,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    flexDirection: 'row',
    padding: 30,
  },
  section: {
    width: '50%',
    margin: 30,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  invoiceInfo: {},
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  address: {},
});

export const Invoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: '',
    date: '',
    issuerName: '',
    issuerAddress: '',
    recipientName: '',
    recipientAddress: '',
    issuerTaxID: '',
    recipientTaxID: '',
    transactionDate: '',
    description: '',
    unitPrice: '',
    quantity: '',
    discount: '',
    netAmount: '',
    taxRate: '',
    taxAmount: '',
    totalAmount: '',
  });

  const handleChange = (field, value) => {
    setInvoiceData({
      ...invoiceData,
      [field]: value,
    });
  };

  const handleGeneratePDF = async () => {
    const pdfData = (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.header}>Invoice</Text>
            <Text style={styles.invoiceInfo}>
              Invoice Number: {invoiceData.invoiceNumber}
            </Text>
            <Text style={styles.invoiceInfo}>Date: {invoiceData.date}</Text>
            <Text style={styles.address}>
              Issuer: {invoiceData.issuerName}
              {invoiceData.issuerAddress}
              {'\n'}Tax ID: {invoiceData.issuerTaxID}
            </Text>
            <Text style={styles.address}>
              Recipient: {invoiceData.recipientName}
              {invoiceData.recipientAddress}
              {'\n'}Tax ID: {invoiceData.recipientTaxID}
            </Text>
            <Text style={styles.invoiceInfo}>
              Transaction Date: {invoiceData.transactionDate}
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.item}>
              <Text>Description:</Text>
              <Text>{invoiceData.description}</Text>
            </View>
            <View style={styles.item}>
              <Text>Unit Price:</Text>
              <Text>{invoiceData.unitPrice}</Text>
            </View>
            <View style={styles.item}>
              <Text>Quantity:</Text>
              <Text>{invoiceData.quantity}</Text>
            </View>
            <View style={styles.item}>
              <Text>Discount:</Text>
              <Text>{invoiceData.discount}</Text>
            </View>
            <View style={styles.item}>
              <Text>Net Amount:</Text>
              <Text>{invoiceData.netAmount}</Text>
            </View>
            <View style={styles.item}>
              <Text>Tax Rate:</Text>
              <Text>{invoiceData.taxRate}</Text>
            </View>
            <View style={styles.item}>
              <Text>Tax Amount:</Text>
              <Text>{invoiceData.taxAmount}</Text>
            </View>
            <View style={styles.item}>
              <Text>Total Amount:</Text>
              <Text>{invoiceData.totalAmount}</Text>
            </View>
          </View>
        </Page>
      </Document>
    );

    const blob = await pdf(pdfData).toBlob();

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'invoice.pdf';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <div style={{ marginBottom: '10px' }}>
            <label>Invoice Number:</label>
            <input
              type="text"
              value={invoiceData.invoiceNumber}
              onChange={(e) => handleChange('invoiceNumber', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Date:</label>
            <input
              type="text"
              value={invoiceData.date}
              onChange={(e) => handleChange('date', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Issuer (Name):</label>
            <input
              type="text"
              value={invoiceData.issuerName}
              onChange={(e) => handleChange('issuerName', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Issuer (Address):</label>
            <input
              type="text"
              value={invoiceData.issuerAddress}
              onChange={(e) => handleChange('issuerAddress', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Issuer Tax ID:</label>
            <input
              type="text"
              value={invoiceData.issuerTaxID}
              onChange={(e) => handleChange('issuerTaxID', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Recipient (Name):</label>
            <input
              type="text"
              value={invoiceData.recipientName}
              onChange={(e) => handleChange('recipientName', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Recipient (Address):</label>
            <input
              type="text"
              value={invoiceData.recipientAddress}
              onChange={(e) => handleChange('recipientAddress', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Recipient Tax ID:</label>
            <input
              type="text"
              value={invoiceData.recipientTaxID}
              onChange={(e) => handleChange('recipientTaxID', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Transaction Date:</label>
            <input
              type="text"
              value={invoiceData.transactionDate}
              onChange={(e) => handleChange('transactionDate', e.target.value)}
            />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: '10px' }}>
            <label>Description:</label>
            <input
              type="text"
              value={invoiceData.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Unit Price:</label>
            <input
              type="text"
              value={invoiceData.unitPrice}
              onChange={(e) => handleChange('unitPrice', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Quantity:</label>
            <input
              type="text"
              value={invoiceData.quantity}
              onChange={(e) => handleChange('quantity', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Discount:</label>
            <input
              type="text"
              value={invoiceData.discount}
              onChange={(e) => handleChange('discount', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Net Amount:</label>
            <input
              type="text"
              value={invoiceData.netAmount}
              onChange={(e) => handleChange('netAmount', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Tax Rate:</label>
            <input
              type="text"
              value={invoiceData.taxRate}
              onChange={(e) => handleChange('taxRate', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Tax Amount:</label>
            <input
              type="text"
              value={invoiceData.taxAmount}
              onChange={(e) => handleChange('taxAmount', e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Total Amount:</label>
            <input
              type="text"
              value={invoiceData.totalAmount}
              onChange={(e) => handleChange('totalAmount', e.target.value)}
            />
          </div>
        </div>
      </div>
      <button onClick={handleGeneratePDF}>Generate PDF</button>

      <div style={{ marginTop: '20px' }}>
        <PDFViewer width="600" height="600">
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text style={styles.header}>Invoice</Text>
                <Text style={styles.invoiceInfo}>
                  Invoice Number: {invoiceData.invoiceNumber}
                </Text>
                <Text style={styles.invoiceInfo}>Date: {invoiceData.date}</Text>
                <Text style={styles.address}>
                  Issuer: {invoiceData.issuerName}
                  {invoiceData.issuerAddress}
                  {'\n'}Tax ID: {invoiceData.issuerTaxID}
                </Text>
                <Text style={styles.address}>
                  Recipient: {invoiceData.recipientName}
                  {invoiceData.recipientAddress}
                  {'\n'}Tax ID: {invoiceData.recipientTaxID}
                </Text>
                <Text style={styles.invoiceInfo}>
                  Transaction Date: {invoiceData.transactionDate}
                </Text>
              </View>
              <View style={styles.section}>
                <View style={styles.item}>
                  <Text>Description:</Text>
                  <Text>{invoiceData.description}</Text>
                </View>
                <View style={styles.item}>
                  <Text>Unit Price:</Text>
                  <Text>{invoiceData.unitPrice}</Text>
                </View>
                <View style={styles.item}>
                  <Text>Quantity:</Text>
                  <Text>{invoiceData.quantity}</Text>
                </View>
                <View style={styles.item}>
                  <Text>Discount:</Text>
                  <Text>{invoiceData.discount}</Text>
                </View>
                <View style={styles.item}>
                  <Text>Net Amount:</Text>
                  <Text>{invoiceData.netAmount}</Text>
                </View>
                <View style={styles.item}>
                  <Text>Tax Rate:</Text>
                  <Text>{invoiceData.taxRate}</Text>
                </View>
                <View style={styles.item}>
                  <Text>Tax Amount:</Text>
                  <Text>{invoiceData.taxAmount}</Text>
                </View>
                <View style={styles.item}>
                  <Text>Total Amount:</Text>
                  <Text>{invoiceData.totalAmount}</Text>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = (props) => {
  const history =useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
  sendRequest(quoteData)
  };

  return (
    <div>
      <h1>NewQuote</h1>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuote;

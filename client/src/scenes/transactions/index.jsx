import React, { useState } from 'react';
import { useGetTransactionsQuery } from 'state/api';
import { Box, useTheme } from "@mui/material";

const Transactions = () => {

    const theme = useTheme();

    // values to be sent to the backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");
  
    const [searchInput, setSearchInput] = useState("");
    const { data, isLoading } = useGetTransactionsQuery({
      page,
      pageSize,
      sort: JSON.stringify(sort),
      search,
    });

  return (
    <div>
      
    </div>
  )
}

export default Transactions

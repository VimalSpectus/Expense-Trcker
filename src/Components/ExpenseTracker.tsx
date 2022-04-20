import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import classes from './AllStyle.module.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { text } from 'stream/consumers';

const ExpenseTracker = () => {


   const list = {  
        date: new Date().toLocaleString(),
        Descption: String,
        amount: Number,
        allcreditdebit: String
    }

    const [allExpens, setAllExpense] = useState<any>(list);

    const [allExpensList, setAllExpenseList] = useState<any>([]);
    const [isCredit, setIsCredit] = useState<any>(" ");
    const [drop, setDrop] = useState<any>("");


    const handleChangeInput = (texts: any, e: any) => {
        setAllExpense({
            ...allExpens, [texts]: e.target.value
        })
        setIsCredit(e.target.value) 
       
    }

    const handleChangeInputdrop = (fields: any, e: any) =>{
         setAllExpense({
            ...allExpens, [fields]: e.target.value
        })
        setDrop(e.target.value)
    }


    const handeClick = () => {
        console.log(allExpens);
        setAllExpenseList([...allExpensList, allExpens]);
        setAllExpense(list)
    }




    return (
        <div >
            <h1 className={classes.form}>My Expense Traker</h1>
            <form className={classes.form}>
                <div className={classes.alldiv}>
                    <p >
                        <TextField id="1-basic" label="Amount" type="number" variant="outlined" value={allExpens.amount} onChange={(e) => handleChangeInput("amount", e)} />
                    </p>
                    <p>
                        <TextField id="2" label="Descrption" variant="outlined" value={allExpens.Descption} onChange={(e) => handleChangeInput("Descption", e)} />
                    </p>
                </div>
                <div>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            value={isCredit}
                            onChange={(e) => handleChangeInput("value", e)}
                        >
                            <FormControlLabel value="Credit" control={<Radio />} label="Credit" />
                            <FormControlLabel value="Debit" control={<Radio />} label="Debit" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <p ><Button variant="contained" color="primary" onClick={handeClick}>Add</Button></p>
            </form>

            <div className={classes.alldiv}>
                <TableContainer data-testid="custom-element">
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center"><h2>Trasition Date</h2></TableCell>
                                <TableCell align="center"><h2>Descption</h2></TableCell>
                                <TableCell align="center"><h2>Amount</h2></TableCell>
                                <TableCell align="center">   <Box sx={{ minWidth: 120 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Trasition List</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Trasition"
                                            onChange={(e) => handleChangeInputdrop("value", e)}
                                            value={drop}
                                        >
                                            <MenuItem value="AllTrasition">AllTrasition</MenuItem>
                                            <MenuItem value="Debit">Debit</MenuItem>
                                            <MenuItem value="Credit">Credit</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {allExpensList.filter((field: { value: string; }) =>{
                             if(drop === "AllTrasition"){
                                 return true;
                             }else{
                                 return field.value?.includes(drop)
                             }
                            } )
                                .map((item: any) => {   
                                    return (
                                        <TableRow >
                                            <TableCell align="center" >{item.date}</TableCell>
                                            <TableCell align="center" >{item.Descption}</TableCell>
                                            <TableCell align="center" >{item.amount}</TableCell>
                                            <TableCell align="center" >{item.value}</TableCell>
                                        </TableRow>
                                    )
                                })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default ExpenseTracker
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/GridLegacy";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import Button from "@mui/material/Button";
import type { SelectChangeEvent } from "@mui/material";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

type CartitemProps = {
  changequantity: changequantity;
  removecartitem: (id: number) => void;
} & {
  id: number;
  title: string;
  price: number;
  img: string;
  max: number;
  quantity: number;
};

type changequantity = (id: number, quantity: number) => void;

const Cartitem = React.memo(function Cartitem({
  id,
  title,
  price,
  img,
  max,
  quantity,
  changequantity,
  removecartitem,
}: CartitemProps): React.ReactElement {
  const removeItem = () => {
    removecartitem(id);
  };
  return (
    <Paper
      sx={(theme) => ({
        p: 2,

        maxWidth: "100%",
        flexGrow: 1,
        backgroundColor: theme.palette.ant.back,
        marginBottom: "20px",
      })}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Img alt="complex" src={img} />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                color="white"
                component="div"
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                onClick={removeItem}
                style={{ marginLeft: "30px" }}
                variant="text"
              >
                remove
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography color="white" variant="subtitle1" component="div">
              {price}
            </Typography>
            <SelectSmall
              id={id}
              max={max}
              quantity={quantity}
              changequantity={changequantity}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
});

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function SelectSmall({
  max,
  quantity,
  id,
  changequantity,
}: {
  max?: number;
  quantity: number;
  id: number;
  changequantity: changequantity;
}) {
  const [age, setAge] = React.useState(quantity);
  const handleChange = (event: SelectChangeEvent<number>) => {
    const newQuantity = event.target.value as unknown as number;
    setAge(newQuantity);
    changequantity(id, newQuantity);
  };
  const theme = useTheme();

  const render = Array(max)
    .fill(0)
    .map((_, i) => {
      const q = ++i;
      return (
        <MenuItem key={q} value={q}>
          {q}
        </MenuItem>
      );
    });
  return (
    <FormControl
      sx={{ m: 1, minWidth: 80, backgroundColor: theme.palette.ant.to }}
      size="small"
    >
      <InputLabel id="demo-select-small-label">quantity</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="quantity"
        onChange={handleChange}
      >
        {render}
      </Select>
    </FormControl>
  );
}

export default Cartitem;

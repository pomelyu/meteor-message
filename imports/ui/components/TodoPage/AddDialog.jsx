import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';


class AddDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };

    this.handleTextOnChange = this.handleTextOnChange.bind(this);
    this.handleDialogSubmit = this.handleDialogSubmit.bind(this);
  }

  handleTextOnChange(event) {
    const { value: text } = event.target;
    this.setState({ text });
  }

  handleDialogSubmit() {
    this.props.onDialogSubmit(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    const { isOpen, onDialogClose } = this.props;
    const { text } = this.state;
    return (
      <Dialog fullWidth open={isOpen} onClose={onDialogClose}>
        <DialogTitle>新增待辦事項</DialogTitle>
        <DialogContent>
          <DialogContentText>
            輸入或編輯文字
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="待辦事項"
            fullWidth
            value={text}
            onChange={this.handleTextOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onDialogClose} raised color="default">取消</Button>
          <Button onClick={this.handleDialogSubmit} raised color="primary">儲存</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default AddDialog;

"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";

interface DeleteConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  itemName?: string;
  loading?: boolean;
}

export default function DeleteConfirmationDialog({
  open,
  onClose,
  onConfirm,
  title,
  itemName,
  loading = false,
}: DeleteConfirmationDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '16px',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
          maxWidth: '400px',
        }
      }}
    >
      <DialogTitle sx={{
        fontWeight: 700,
        color: '#1a1a1a',
        pb: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pr: 1
      }}>
        {title}
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            color: '#666',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              color: '#1a1a1a',
            }
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
          {itemName ? (
            <>Are you sure you want to delete <strong>&quot;{itemName}&quot;</strong>?</>
          ) : (
            <>Are you sure you want to delete this item?</>
          )}
        </Typography>
        <Typography variant="body2" sx={{ color: '#d32f2f', fontWeight: 500 }}>
          This action cannot be undone.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3, gap: 1 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            color: '#fff',
            borderColor: '#ddd',
            px: 3,
            py: 1,
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          disabled={loading}
          sx={{
            backgroundColor: '#d32f2f',
            color: '#fff',
            px: 3,
            py: 1,
            borderRadius: '8px',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#c62828',
            },
            '&:disabled': {
              backgroundColor: '#ccc',
            }
          }}
        >
          {loading ? 'Deleting...' : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}


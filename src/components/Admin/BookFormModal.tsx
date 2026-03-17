import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import type { BookReview } from "@/interface/book";

interface BookFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book?: BookReview | null;
  onSubmit: (data: Omit<BookReview, "id">) => void;
}

const emptyForm = {
  title: "",
  author: "",
  rating: 0,
  genre: "",
    reviewDate: new Date().toISOString(),
  shortReview: "",
  fullReview: "",
  recommendation: true,
  coverUrl: "",
};

const BookFormModal = ({ open, onOpenChange, book, onSubmit }: BookFormModalProps) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (book) {
      setForm({
        title: book.title,
        author: book.author,
        rating: book.rating,
        genre: book.genre,
        reviewDate: book.reviewDate,
        shortReview: book.shortReview,
        fullReview: book.fullReview,
        recommendation: book.recommendation,
        coverUrl: book.coverUrl || "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [book, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...form,
      reviewDate: book?.reviewDate || new Date().toISOString(),
      coverUrl: form.coverUrl || undefined,
    });
    onOpenChange(false);
  };

  const set = (key: string, value: unknown) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {book ? "Editar Livro" : "Adicionar Livro"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="title">Título</Label>
              <Input id="title" required value={form.title} onChange={(e) => set("title", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="author">Autor(a)</Label>
              <Input id="author" required value={form.author} onChange={(e) => set("author", e.target.value)} />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label htmlFor="genre">Género</Label>
              <Input id="genre" required value={form.genre} onChange={(e) => set("genre", e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="rating">Avaliação (1-5)</Label>
              <Input
                id="rating"
                type="number"
                min={0}
                max={5}
                required
                value={form.rating}
                onChange={(e) => set("rating", Number(e.target.value))}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reviewDate">Data</Label>
                <Input 
                    id="reviewDate" 
                    value={book?.reviewDate ? new Date(book.reviewDate).toLocaleDateString('pt-PT') : new Date().toLocaleDateString('pt-PT')}
                    disabled
                />            
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="coverUrl">URL da Capa (opcional)</Label>
            <Input id="coverUrl" value={form.coverUrl} onChange={(e) => set("coverUrl", e.target.value)} placeholder="https://..." />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="shortReview">Resumo da Resenha</Label>
            <Textarea id="shortReview" required rows={2} value={form.shortReview} onChange={(e) => set("shortReview", e.target.value)} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="fullReview">Resenha Completa</Label>
            <Textarea id="fullReview" required rows={4} value={form.fullReview} onChange={(e) => set("fullReview", e.target.value)} />
          </div>

          <div className="flex items-center gap-3">
            <Switch
              id="recommendation"
              checked={form.recommendation}
              onCheckedChange={(v) => set("recommendation", v)}
            />
            <Label htmlFor="recommendation">Recomendado</Label>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit">
              {book ? "Guardar" : "Adicionar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookFormModal;
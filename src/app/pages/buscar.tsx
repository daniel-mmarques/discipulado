import { PlusCircle, Search } from 'lucide-react'
import { Button } from '../../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Header } from '../components/header'

export default function Buscar() {
  return (
    <div>
      <Header />
      <div className="p-4 max-w-8xl mx-auto space-y-4">
        <h1 className="text-4xl font-bold">Pessoas</h1>
        <div className="flex items-center justify-between">
          <form className=" flex items-center gap-2">
            <Input name="nome" placeholder="Nome da Pessoa" />
            <Input name="congregacao" placeholder="Congregação" />
            <Button type="submit" variant="outline" className="flex items-center">
              <Search className="w-4 h-4" />
              Filtrar resultados
            </Button>
          </form>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="w-4 h-4" />
                Nova Pessoa
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nova Pessoa</DialogTitle>
                <DialogDescription>Adicionar uma nova pessoa ao sistema</DialogDescription>
              </DialogHeader>
              <form action="" className="space-y-4">
                <div className="grid grid-cols-4 items-center">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input className="col-span-3" id="name" />
                </div>
                <div className="grid grid-cols-4 items-center">
                  <Label htmlFor="tel">Telefone</Label>
                  <Input className="col-span-3" id="tel" />
                </div>
                <div className="grid grid-cols-4 items-center">
                  <Label htmlFor="congregation">Congregação</Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sede">Sede</SelectItem>
                      <SelectItem value="vila nova">Vila Nova</SelectItem>
                      <SelectItem value="itoupava">Itoupava</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center">
                  <Label htmlFor="situation">Situação</Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="convercao">Converção</SelectItem>
                      <SelectItem value="reconciliado">Reconciliado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center">
                  <Label htmlFor="situation">Batizado</Label>
                  <Select>
                    <SelectTrigger className="col-span-3">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sim">Sim</SelectItem>
                      <SelectItem value="nao">Não</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <DialogFooter>
                  <Button type="submit">Salvar</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="border rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableHead>Nome</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead>Congregação</TableHead>
              <TableHead>Situação</TableHead>
              <TableHead>Data</TableHead>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>João</TableCell>
                    <TableCell>47 99219-2121</TableCell>
                    <TableCell>Sede</TableCell>
                    <TableCell>Conversão</TableCell>
                    <TableCell>14/07/2024</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

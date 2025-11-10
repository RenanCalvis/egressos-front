import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FileText, Upload, X } from 'lucide-react';
import React, { useCallback, useRef, useState } from 'react';

const ImportPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  console.log('ARQUIVO INCIICDO:', selectedFile);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    console.log('Arquivo selecionado:', file);
  };

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
    console.log('ARQUIVO SOLTO:', file);
  }, []);

  return (
    <div className=" text-center">
      <h1 className="text-6xl font-semibold pb-20 text-lime-700">
        Importação de dados
      </h1>
      <Card className="p-8 border-border shadow-lg ">
        {!selectedFile ? (
          <div
            className={`px-25 py-10 rounded-lg border-dashed border-2  border-border transition-all duration-300 ease-in-out hover:border-lime-700 hover:bg-slate-50 ${
              isDragging ? 'bg-slate-100 border-lime-700 scale-[1.02]' : ''
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <Upload className="h-16 w-16 mx-auto mb-6 text-muted-foreground" />
            <h3 className="text-xl font-semibold text-foreground  pb-1">
              Arraste seu arquivo aqui
            </h3>
            <p className="text-zinc-400 pb-6">Ou clique para selecionar</p>
            <label htmlFor="file-upload" className="cursor-pointer">
              <Button
                variant="outline"
                className="w-full  hover:bg-lime-700 hover:text-white"
                asChild
              >
                <span>Selecionar arquivo</span>
              </Button>
            </label>
            <p className="text-zinc-400 pt-4">
              Formatos suportados: ODS/XLSX/CSV
            </p>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              accept=".ods, .xlsx, .csv"
              onChange={handleFileChange}
            />
            {/* <Input
          id="import-file"
          type="file"s
          className="mt-4"
          accept=".ods, .xlsx, .csv"
          /> */}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl h-25 flex items-center gap-2 px-4 justify-between">
            <FileText className="size-14 text-lime-600"></FileText>
            <div className="text-start">
              <p className="font-semibold text-lime-900">{selectedFile.name}</p>
              <p className="text-sm text-zinc-400">
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setSelectedFile(null)}
            >
              <X></X>
            </Button>
          </div>
        )}
        <Button>Importar arquivo</Button>
      </Card>
    </div>
  );
};

export default ImportPage;

//ODS, XLSX, CSV

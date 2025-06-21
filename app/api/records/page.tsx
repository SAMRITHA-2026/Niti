"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, UploadCloud, ShieldCheck, FolderOpen, Eye, Trash2, FilePlus, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HealthRecordsPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [viewFileIndex, setViewFileIndex] = useState<number | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) setSelectedFile(file)
  }

  const handleUpload = () => {
    if (selectedFile) {
      setUploadedFiles(prev => [...prev, selectedFile])
      setUploadSuccess(true)
      setTimeout(() => setUploadSuccess(false), 4000)
      setSelectedFile(null)
    }
  }

  const handleDelete = (index: number) => {
    const updatedFiles = [...uploadedFiles]
    updatedFiles.splice(index, 1)
    setUploadedFiles(updatedFiles)
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-blue-100/30 via-cyan-100/20 to-white/50 backdrop-blur px-4 py-12 text-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-10 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-4xl font-bold flex items-center justify-center gap-2">
            <FileText className="w-7 h-7 text-sky-700" /> Health Records
          </h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Upload, preview, and manage your health documents securely in a beautiful interface.
          </p>
        </motion.div>

        <motion.div
          className="shadow-xl mb-10"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
        >
          <Card className="border border-sky-200/40 bg-white/50 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-800">
                <ShieldCheck className="w-5 h-5" /> Upload New Record
              </CardTitle>
              <CardDescription>PDF or image files under 5MB. Your uploads are encrypted and private.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Input type="file" accept=".pdf,.jpg,.png" onChange={handleFileChange} />
              {selectedFile && (
                <div className="text-sm text-emerald-600">Ready to upload: {selectedFile.name}</div>
              )}
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                onClick={handleUpload}
                disabled={!selectedFile}
                className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:scale-105 transition"
              >
                <UploadCloud className="w-4 h-4" /> Upload
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {uploadSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6"
          >
            <CheckCircle className="inline mr-2" /> Upload successful!
          </motion.div>
        )}

        {uploadedFiles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-semibold text-blue-800 flex items-center gap-2">
              <FolderOpen className="w-5 h-5" /> Uploaded Records
            </h2>

            {uploadedFiles.map((file, index) => (
              <Card
                key={index}
                className="border border-blue-200 bg-white/50 backdrop-blur hover:shadow-lg transition duration-300"
              >
                <CardHeader className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base text-sky-700">{file.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {file.type} - {(file.size / 1024).toFixed(2)} KB
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" onClick={() => setViewFileIndex(index)}>
                      <Eye className="w-4 h-4 text-blue-600" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(index)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </motion.div>
        )}

        {viewFileIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setViewFileIndex(null)}
          >
            <div
              className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Preview: {uploadedFiles[viewFileIndex].name}</h3>
              <p className="text-sm text-muted-foreground">(Preview not available in this demo)</p>
              <Button
                onClick={() => setViewFileIndex(null)}
                className="absolute top-2 right-2"
                variant="outline"
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

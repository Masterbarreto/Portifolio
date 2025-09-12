'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateProjectTagsAndSummaries, GenerateProjectTagsAndSummariesOutput } from '@/ai/flows/generate-project-tags-and-summaries';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Tags, Text } from 'lucide-react';
import { Badge } from './ui/badge';

const formSchema = z.object({
  projectDescription: z.string().min(20, {
    message: 'A descrição deve ter pelo menos 20 caracteres.',
  }),
});

export default function AiTool() {
  const [result, setResult] = useState<GenerateProjectTagsAndSummariesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescription: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await generateProjectTagsAndSummaries(values);
      setResult(response);
    } catch (e) {
      setError('Ocorreu um erro ao gerar as sugestões. Tente novamente.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="projectDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do Projeto</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva seu projeto aqui. Fale sobre o problema que ele resolve, as tecnologias usadas, e seus objetivos."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando...
                </>
              ) : (
                'Gerar Sugestões'
              )}
            </Button>
          </form>
        </Form>
        {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
        {result && (
          <div className="mt-6 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                        <Tags className="mr-2 h-5 w-5 text-primary"/>
                        Tags Sugeridas
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag) => (
                        <Badge key={tag} variant="default">{tag}</Badge>
                    ))}
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                        <Text className="mr-2 h-5 w-5 text-primary"/>
                        Resumo Sugerido
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{result.summary}</p>
                </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

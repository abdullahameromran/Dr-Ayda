'use client';

import { useState, useTransition } from 'react';
import { useForm, useFieldArray, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { addQuestion } from './actions';

const questionFormSchema = z.object({
  question: z.string().min(5, { message: 'Question must be at least 5 characters.' }),
  answers: z.array(z.string().min(1, { message: 'Answer cannot be empty.' })).min(2, { message: 'At least two answers are required.' }),
  correctAnswerIndex: z.coerce.number().min(0, { message: 'Correct answer index must be valid.' }),
  explanation: z.string().min(10, { message: 'Explanation must be at least 10 characters.' }),
});

type QuestionFormValues = z.infer<typeof questionFormSchema>;

export default function QuestionForm() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm<QuestionFormValues>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      question: '',
      answers: ['', ''],
      correctAnswerIndex: 0,
      explanation: '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'answers',
  });

  const onSubmit: SubmitHandler<QuestionFormValues> = (data) => {
    startTransition(async () => {
      const formData = new FormData();
      formData.append('question', data.question);
      data.answers.forEach(answer => formData.append('answers[]', answer));
      formData.append('correctAnswerIndex', data.correctAnswerIndex.toString());
      formData.append('explanation', data.explanation);
      
      const result = await addQuestion(formData);
      if (result.success) {
        toast({ title: 'Success', description: 'Question added successfully.' });
        reset();
      } else {
        toast({ title: 'Error', description: result.error || 'Failed to add question.', variant: 'destructive' });
      }
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Question</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="question">Question</Label>
            <Textarea id="question" {...register('question')} className={errors.question ? 'border-destructive' : ''} />
            {errors.question && <p className="text-sm text-destructive mt-1">{errors.question.message}</p>}
          </div>

          <div>
            <Label>Answers</Label>
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-2 mb-2">
                <Input
                  {...register(`answers.${index}`)}
                  placeholder={`Answer ${index + 1}`}
                  className={errors.answers?.[index] ? 'border-destructive' : ''}
                />
                <Input
                  type="radio"
                  id={`correctAnswerIndex-${index}`}
                  value={index}
                  {...register('correctAnswerIndex')}
                  className="form-radio h-5 w-5 text-primary focus:ring-primary"
                />
                <Label htmlFor={`correctAnswerIndex-${index}`} className="ml-1 text-sm">Correct</Label>
                {fields.length > 2 && (
                  <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)} aria-label="Remove answer">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
            ))}
            {errors.answers && <p className="text-sm text-destructive mt-1">{errors.answers.message || errors.answers.root?.message}</p>}
            <Button type="button" variant="outline" size="sm" onClick={() => append('')} className="mt-2">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Answer
            </Button>
             {errors.correctAnswerIndex && <p className="text-sm text-destructive mt-1">{errors.correctAnswerIndex.message}</p>}
          </div>

          <div>
            <Label htmlFor="explanation">Explanation</Label>
            <Textarea id="explanation" {...register('explanation')} className={errors.explanation ? 'border-destructive' : ''} />
            {errors.explanation && <p className="text-sm text-destructive mt-1">{errors.explanation.message}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Adding...' : 'Add Question'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Mail } from "lucide-react";

interface RecoveryFormValues {
  email: string;
}

const PasswordRecovery = () => {
  const navigate = useNavigate();
  const form = useForm<RecoveryFormValues>();

  const onSubmit = (data: RecoveryFormValues) => {
    // Mock password recovery - in a real app, this would connect to a backend
    toast.success('Recovery email sent! Please check your inbox.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8">Recuperar Senha</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                        <Input placeholder="Digite seu email" type="email" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Enviar Email de Recuperação
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Lembrou sua senha?{" "}
                <Button variant="link" className="p-0" onClick={() => navigate("/login")}>
                  Voltar ao login
                </Button>
              </p>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default PasswordRecovery;
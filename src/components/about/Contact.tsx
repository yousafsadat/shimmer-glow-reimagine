
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Contact = () => {
  const contacts = [
    { email: "cheekennee@meta.upsi.edu.my", name: "Ts.Dr. Chee Ken Nee" },
    { email: "p20232002567@siswa.upsi.edu.my", name: "Shahzad Rizwan" },
    { email: "hammadkhan3923@gmail.com", name: "Hammad Nawaz" }
  ];

  return (
    <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-blue-700">
          <Mail className="w-6 h-6 mr-3 text-blue-500" />
          Contact
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-6">For inquiries, please contact:</p>
        <div className="grid md:grid-cols-3 gap-4">
          {contacts.map((contact, index) => (
            <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100 text-center">
              <Mail className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </Button>
              <p className="text-gray-600 text-sm mt-1">({contact.name})</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;

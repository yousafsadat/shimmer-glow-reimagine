
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Brain, TrendingUp, Database, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Model = () => {
  // Sample training data
  const trainingLossData = [
    { epoch: 1, loss: 2.1 },
    { epoch: 2, loss: 1.8 },
    { epoch: 3, loss: 1.5 },
    { epoch: 4, loss: 1.2 },
    { epoch: 5, loss: 1.0 },
    { epoch: 6, loss: 0.8 },
    { epoch: 7, loss: 0.7 },
    { epoch: 8, loss: 0.6 },
    { epoch: 9, loss: 0.5 },
    { epoch: 10, loss: 0.4 }
  ];

  const trainingAccuracyData = [
    { epoch: 1, accuracy: 0.45 },
    { epoch: 2, accuracy: 0.52 },
    { epoch: 3, accuracy: 0.61 },
    { epoch: 4, accuracy: 0.68 },
    { epoch: 5, accuracy: 0.74 },
    { epoch: 6, accuracy: 0.79 },
    { epoch: 7, accuracy: 0.82 },
    { epoch: 8, accuracy: 0.85 },
    { epoch: 9, accuracy: 0.87 },
    { epoch: 10, accuracy: 0.89 }
  ];

  const featureImportanceData = [
    { feature: 'Previous Attempts', importance: 0.85 },
    { feature: 'Studied Credits', importance: 0.78 },
    { feature: 'Forum Activity', importance: 0.72 },
    { feature: 'Quiz Scores', importance: 0.68 },
    { feature: 'Resource Access', importance: 0.65 },
    { feature: 'Assignment Scores', importance: 0.62 },
    { feature: 'Content Views', importance: 0.58 },
    { feature: 'Discussion Posts', importance: 0.55 },
    { feature: 'Time Spent', importance: 0.52 },
    { feature: 'Login Frequency', importance: 0.48 },
    { feature: 'Video Views', importance: 0.45 },
    { feature: 'Downloads', importance: 0.42 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            CNN+LSTM Model Overview
          </h1>
          <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
            <Link to="/">
              ← Back to Prediction
            </Link>
          </Button>
        </div>

        <p className="text-gray-600 mb-6">
          Learn about the hybrid CNN+LSTM model used to predict student outcomes based on academic and engagement features.
        </p>

        {/* Model Architecture */}
        <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-blue-700">
              <Brain className="w-6 h-6 mr-3 text-blue-500" />
              Model Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              The model combines a Convolutional Neural Network (CNN) and a Long Short-Term Memory (LSTM) network to process 12 input features, such as previous attempts, studied credits, and engagement metrics (forumng, oucontent, quiz, resource). The CNN extracts spatial patterns, while the LSTM captures temporal dependencies, making it suitable for sequential student data.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Input Layer</strong>: 12 features, reshaped to (1, 12) for 1D convolution.</li>
              <li><strong>Conv1D</strong>: 16 filters, kernel size 3, padding 1, followed by ReLU and MaxPooling (kernel size 2).</li>
              <li><strong>LSTM</strong>: 32 hidden units, 1 layer, batch-first, processing the reshaped CNN output.</li>
              <li><strong>Fully Connected Layers</strong>: 32 → 64 (ReLU, Dropout 0.3) → 4 output classes (Fail, Pass, Withdrawn, Distinction).</li>
            </ul>
          </CardContent>
        </Card>

        {/* Training Process */}
        <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-blue-700">
              <TrendingUp className="w-6 h-6 mr-3 text-blue-500" />
              Training Process
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              The model was trained on a reduced dataset with features normalized using StandardScaler. It uses the Adam optimizer and Cross-Entropy Loss, with a dropout rate of 0.3 to prevent overfitting. Training metrics are visualized below.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-gray-700 mb-4">Training Loss</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trainingLossData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="loss" stroke="#ef4444" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-gray-700 mb-4">Training Accuracy</h5>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={trainingAccuracyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis domain={[0, 1]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="accuracy" stroke="#22c55e" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Importance */}
        <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl text-blue-700">
              <Database className="w-6 h-6 mr-3 text-blue-500" />
              Feature Importance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              The chart below illustrates the relative importance of input features, derived from model weights and feature correlations, to understand which factors most influence predictions.
            </p>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={featureImportanceData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 1]} />
                <YAxis dataKey="feature" type="category" width={120} />
                <Tooltip />
                <Bar dataKey="importance" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Model;

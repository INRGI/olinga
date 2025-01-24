import { useEffect, useState } from 'react';
import { toastError, toastSuccess } from '../../helpers/toastify';
import {
  Container,
  CourseCard,
  CoursesContainer,
  DeleteButton,
  HeaderContainer,
} from '../CoursesAdmin/CoursesAdmin.styled';
import { ServicesBlockHeader } from '../CategoryAdmin/CategoryAdmin.styled';
import {
  Consultation,
  deleteConsultation,
  getConsultations,
} from '../../pages/AdminDashboard/ConsultatoinService';
import LeadDetailsModal from '../LeadDetailsModal';
import DatePickerInput from '../DatePickerInput/DatePickerInput';
import DatePickerSmallInput from '../DatePickerInput/DatePickerSmallInput';
import { DatePickerContainer } from './AdminLeads.styled';

const AdminLeads: React.FC = () => {
  const [leads, setLeads] = useState<Consultation[]>([]);
  const [leadsModalOpen, setLeadsModalOpen] = useState<boolean>(false);
  const [leadDetailsItem, setLeadDetailsItem] = useState<Consultation | null>(
    null
  );
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  useEffect(() => {
    fetchConsultations();
  }, []);

  const handleCloseModal = async () => {
    setLeadDetailsItem(null);
    setLeadsModalOpen(false);
  };

  const handleOpenModal = async (lead: Consultation) => {
    setLeadDetailsItem(lead);
    setLeadsModalOpen(true);
  };

  const fetchConsultations = async () => {
    const data = await getConsultations();
    setLeads(data);
  };

  const handleDeleteLead = async (id: string) => {
    try {
      await deleteConsultation(id);
      toastSuccess('Lead deleted successfully');
      await fetchConsultations();
    } catch (error) {
      toastError('Error deleting lead');
    }
  };

  const parseDate = (dateString: string): Date | null => {
    return dateString ? new Date(dateString) : null;
  };

  const filteredLeads = leads.filter((lead) => {
    const createdAt = new Date(lead.createdAt);
    const start = parseDate(startDate);
    const end = parseDate(endDate);

    if (start && end) {
      return createdAt >= start && createdAt <= end;
    }
    if (start) {
      return createdAt >= start;
    }
    if (end) {
      return createdAt <= end;
    }
    return true;
  });

  return (
    <Container>
      <HeaderContainer>
        <ServicesBlockHeader>
          <h2>Leads</h2>
          <p>All leads below</p>
        </ServicesBlockHeader>
      </HeaderContainer>
      <DatePickerContainer>
        <DatePickerSmallInput
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="From Date"
        />
        <DatePickerSmallInput
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="To Date"
        />
      </DatePickerContainer>
      <CoursesContainer>
        {filteredLeads?.length > 0 ? (
          filteredLeads.map((lead) => (
            <CourseCard key={lead._id}>
              <h2 onClick={() => handleOpenModal(lead)}>{lead.fullName}</h2>
              <div>
                <DeleteButton onClick={() => handleDeleteLead(lead._id)}>
                  Delete
                </DeleteButton>
              </div>
            </CourseCard>
          ))
        ) : (
          <CourseCard>No leads available.</CourseCard>
        )}
      </CoursesContainer>

      {leadDetailsItem && (
        <LeadDetailsModal
          isOpen={leadsModalOpen}
          onClose={() => handleCloseModal()}
          initialData={leadDetailsItem}
        />
      )}
    </Container>
  );
};

export default AdminLeads;
